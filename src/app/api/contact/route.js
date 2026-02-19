import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rateLimit";
import { sanitizeString, validateContactForm } from "@/lib/validation";

function getClientIP(request) {
    const forwarded = request.headers.get("x-forwarded-for");
    return forwarded ? forwarded.split(",")[0].trim() : request.headers.get("x-real-ip") || "unknown";
}

function getCORSHeaders(origin) {
    const allowedOrigins = [
        "http://localhost:3000",
        "http://localhost:3001",
        process.env.NEXT_PUBLIC_SITE_URL,
    ].filter(Boolean);

    const isAllowed = allowedOrigins.includes(origin);

    return {
        "Access-Control-Allow-Origin": isAllowed ? origin : "null",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Max-Age": "3600",
    };
}

export async function OPTIONS(request) {
    const origin = request.headers.get("origin");
    return new NextResponse(null, {
        status: 204,
        headers: getCORSHeaders(origin),
    });
}

export async function POST(request) {
    try {
        const origin = request.headers.get("origin");
        const corsHeaders = getCORSHeaders(origin);

        // Get client IP for rate limiting
        const clientIP = getClientIP(request);

        // Check rate limit
        if (!rateLimit(clientIP)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429, headers: corsHeaders }
            );
        }

        // Check MongoDB configuration
        if (!process.env.MONGODB_URI) {
            return NextResponse.json(
                {
                    error: "Contact form is not configured. Please reach out directly via the email shown on this page.",
                },
                { status: 503, headers: corsHeaders }
            );
        }

        // Parse and validate request
        let body;
        try {
            body = await request.json();
        } catch {
            return NextResponse.json(
                { error: "Invalid request format" },
                { status: 400, headers: corsHeaders }
            );
        }

        // Sanitize inputs
        const sanitizedData = {
            name: sanitizeString(body.name),
            email: sanitizeString(body.email),
            message: sanitizeString(body.message),
        };

        // Validate form data
        const validation = validateContactForm(sanitizedData);
        if (!validation.isValid) {
            return NextResponse.json(
                { error: validation.errors.join(", ") },
                { status: 400, headers: corsHeaders }
            );
        }

        // Connect and save to database
        await dbConnect();
        const contact = await Contact.create(sanitizedData);

        return NextResponse.json(
            { success: true, message: "Message received successfully" },
            { status: 201, headers: corsHeaders }
        );
    } catch (error) {
        const origin = request.headers.get("origin");
        const corsHeaders = getCORSHeaders(origin);

        console.error("Error submitting contact form:", error.message);

        return NextResponse.json(
            {
                error: "Failed to send message. Please try again or email me directly using the address above.",
            },
            { status: 500, headers: corsHeaders }
        );
    }
}
