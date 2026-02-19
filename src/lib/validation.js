// Sanitize and validate inputs
export function sanitizeString(str) {
    if (typeof str !== 'string') return '';
    
    // Remove potentially dangerous characters
    return str
        .trim()
        .slice(0, 500) // Limit length
        .replace(/<script[^>]*>.*?<\/script>/gi, '') // Remove script tags
        .replace(/<[^>]+>/g, '') // Remove HTML tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+\s*=/gi, ''); // Remove event handlers
}

export function validateEmail(email) {
    if (typeof email !== 'string') return false;
    
    // RFC 5322 simplified regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email) && email.length <= 254;
}

export function validateContactForm(data) {
    const errors = [];

    // Validate name
    if (!data.name || typeof data.name !== 'string') {
        errors.push('Name is required');
    } else if (data.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters');
    } else if (data.name.length > 100) {
        errors.push('Name must be less than 100 characters');
    }

    // Validate email
    if (!data.email || !validateEmail(data.email)) {
        errors.push('Valid email is required');
    }

    // Validate message
    if (!data.message || typeof data.message !== 'string') {
        errors.push('Message is required');
    } else if (data.message.trim().length < 10) {
        errors.push('Message must be at least 10 characters');
    } else if (data.message.length > 5000) {
        errors.push('Message must be less than 5000 characters');
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
}
