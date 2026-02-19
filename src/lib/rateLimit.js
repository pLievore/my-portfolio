// Simple in-memory rate limiter
const requestCounts = new Map();
const WINDOW_MS = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute per IP

export function rateLimit(ip) {
    const now = Date.now();
    
    if (!requestCounts.has(ip)) {
        requestCounts.set(ip, []);
    }

    const timestamps = requestCounts.get(ip);
    
    // Remove timestamps older than the window
    const recentTimestamps = timestamps.filter(t => now - t < WINDOW_MS);
    
    if (recentTimestamps.length >= MAX_REQUESTS) {
        return false; // Rate limit exceeded
    }

    recentTimestamps.push(now);
    requestCounts.set(ip, recentTimestamps);
    return true; // Request allowed
}

// Clean up old entries periodically
setInterval(() => {
    const now = Date.now();
    for (const [ip, timestamps] of requestCounts.entries()) {
        const recentTimestamps = timestamps.filter(t => now - t < WINDOW_MS);
        if (recentTimestamps.length === 0) {
            requestCounts.delete(ip);
        } else {
            requestCounts.set(ip, recentTimestamps);
        }
    }
}, WINDOW_MS);
