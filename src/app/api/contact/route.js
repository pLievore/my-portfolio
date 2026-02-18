import dbConnect from "@/lib/db";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Please provide all fields" },
                { status: 400 }
            );
        }

        if (!process.env.MONGODB_URI) {
            return NextResponse.json(
                {
                    error: "Contact form is not configured. Please reach out directly via the email shown on this page.",
                },
                { status: 503 }
            );
        }

        await dbConnect();
        const contact = await Contact.create({ name, email, message });

        return NextResponse.json(
            { success: true, data: contact },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return NextResponse.json(
            {
                error:
                    process.env.MONGODB_URI
                        ? "Failed to send message. Please try again or email me directly using the address above."
                        : "Contact form is not configured. Please email me directly using the address above.",
            },
            { status: 500 }
        );
    }
}
