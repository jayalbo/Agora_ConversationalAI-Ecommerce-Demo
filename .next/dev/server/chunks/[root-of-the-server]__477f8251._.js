module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/http2 [external] (http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http2", () => require("http2"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/lib/product.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock product data - in production, this would fetch from a database
// This is a simple demo showing how to integrate Agora Conversational AI with e-commerce
//
// NOTE: Product images are currently using placeholder Unsplash photos.
// In production, replace these with actual product photos from your inventory.
__turbopack_context__.s([
    "fetchProduct",
    ()=>fetchProduct
]);
const PRODUCTS = {
    "1": {
        id: "1",
        name: "LuminaSphere Pro - AI-Powered Ambient Lighting System",
        price: 349.99,
        originalPrice: 449.99,
        discount: 22,
        rating: 4.8,
        reviewCount: 3421,
        inStock: true,
        description: "Transform any space with the LuminaSphere Pro, an intelligent ambient lighting system that adapts to your mood, music, and daily routines. Featuring advanced AI algorithms that learn your preferences, 16.7 million color combinations, and seamless smart home integration. Perfect for creating the perfect atmosphere for work, relaxation, gaming, or entertainment. The system includes multiple wireless orbs that sync together, voice control compatibility, and a mobile app with scene presets and custom color palettes.",
        specifications: {
            "AI Engine": "Neural network learns your lighting preferences over time",
            "Color Range": "16.7 million colors with 99% color accuracy",
            Brightness: "Up to 2000 lumens per orb (adjustable 1-100%)",
            Connectivity: "Wi-Fi 6, Bluetooth 5.3, Matter protocol, Zigbee hub",
            "Voice Control": "Works with Alexa, Google Assistant, Apple HomeKit, Siri",
            "Music Sync": "Real-time audio reactive lighting with 0.1ms latency",
            "Smart Features": "Circadian rhythm adjustment, sunrise/sunset simulation, motion detection",
            Power: "USB-C charging, 8-hour battery life, wireless charging pad included",
            Range: "Up to 50 feet wireless range, supports up to 12 orbs per system",
            "App Features": "Scene library (100+ presets), custom animations, scheduling, geofencing",
            Materials: "Premium aluminum and tempered glass construction",
            Dimensions: 'Orb: 4.5" diameter, Base: 3" x 3" x 0.5"',
            Warranty: "2-year limited warranty with lifetime software updates",
            Colors: "Midnight Black, Arctic White, Cosmic Silver, Aurora Blue"
        },
        images: [
            "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80&fit=crop"
        ],
        reviews: [
            {
                id: 1,
                userName: "Alexandra K.",
                rating: 5,
                date: "2024-01-20",
                title: "Absolutely magical! My apartment feels like a different place",
                comment: "I've had this for 3 months now and I'm still amazed every day. The AI has learned my schedule perfectly - it dims for movie nights, brightens for morning work, and syncs beautifully with my music. The color accuracy is incredible and the app is intuitive. Worth every penny!",
                verified: true
            },
            {
                id: 2,
                userName: "Marcus T.",
                rating: 5,
                date: "2024-01-18",
                title: "Best smart lighting system I've ever used",
                comment: "The music sync feature is mind-blowing. I threw a party and everyone was asking where I got these lights. The setup was surprisingly easy, and the Matter protocol means it works with all my existing smart home stuff. The circadian rhythm feature has actually improved my sleep!",
                verified: true
            },
            {
                id: 3,
                userName: "Sophie L.",
                rating: 5,
                date: "2024-01-15",
                title: "Perfect for my home office",
                comment: "I work from home and the adaptive lighting has been a game changer. It automatically adjusts throughout the day to keep me alert in the morning and relaxed in the evening. The voice control works flawlessly with my Alexa. The build quality feels premium.",
                verified: true
            },
            {
                id: 4,
                userName: "James R.",
                rating: 4,
                date: "2024-01-12",
                title: "Great product, minor app quirk",
                comment: "The lights themselves are fantastic - colors are vibrant and the AI features work well. My only complaint is the app can be a bit slow sometimes when switching between scenes, but it's not a dealbreaker. Overall very satisfied with the purchase.",
                verified: true
            },
            {
                id: 5,
                userName: "Emma W.",
                rating: 5,
                date: "2024-01-10",
                title: "My kids love it for their gaming setup",
                comment: "Bought this for my teenager's room and they're obsessed. The music sync during gaming is incredible - the lights react to every sound. The wireless range is impressive, and the battery life is solid. Great value for what you get.",
                verified: true
            },
            {
                id: 6,
                userName: "David M.",
                rating: 5,
                date: "2024-01-08",
                title: "Exceeded all expectations",
                comment: "I was skeptical about the AI features, but they actually work! The system has learned my preferences and now I rarely need to adjust anything manually. The sunrise simulation wakes me up naturally. Integration with HomeKit is seamless.",
                verified: true
            },
            {
                id: 7,
                userName: "Rachel P.",
                rating: 4,
                date: "2024-01-05",
                title: "Beautiful lighting, wish it had more preset scenes",
                comment: "The quality and colors are amazing. The build feels premium and the app is well-designed. I just wish there were more preset scenes in the library - though you can create custom ones, which is nice. The price is fair for what you get.",
                verified: true
            },
            {
                id: 8,
                userName: "Kevin H.",
                rating: 5,
                date: "2024-01-03",
                title: "Perfect for movie nights",
                comment: "The ambient lighting during movies creates an immersive experience. The lights automatically dim and adjust based on the content. Setup was straightforward and the wireless charging is convenient. Highly recommend!",
                verified: true
            },
            {
                id: 9,
                userName: "Maya S.",
                rating: 5,
                date: "2023-12-30",
                title: "Worth every dollar",
                comment: "I've tried several smart lighting systems and this is by far the best. The AI actually makes a difference - it knows when I'm working vs relaxing. The color range is incredible and the music sync is instant. Customer service was also helpful when I had a question.",
                verified: true
            },
            {
                id: 10,
                userName: "Chris B.",
                rating: 4,
                date: "2023-12-28",
                title: "Great but battery could be better",
                comment: "Love the features and the quality is top-notch. The only thing I'd improve is the battery life - 8 hours is decent but I wish it lasted longer for all-day use. The wireless charging helps though. Overall very happy with the purchase.",
                verified: true
            },
            {
                id: 11,
                userName: "Nina F.",
                rating: 5,
                date: "2023-12-25",
                title: "Transformed my living room",
                comment: "These lights completely changed the vibe of my space. The AI has learned my preferences perfectly and the scene library has so many options. The Matter protocol integration was seamless with my existing smart home setup. Beautiful design too!",
                verified: true
            },
            {
                id: 12,
                userName: "Tom G.",
                rating: 5,
                date: "2023-12-22",
                title: "Best purchase of the year",
                comment: "I'm a tech enthusiast and this is one of the coolest products I've bought. The neural network learning is legit - it gets smarter every week. The music sync latency is imperceptible. The build quality is excellent. Can't recommend enough!",
                verified: true
            },
            {
                id: 13,
                userName: "Lily C.",
                rating: 4,
                date: "2023-12-20",
                title: "Love it, minor connectivity issue",
                comment: "The lights are beautiful and the features are amazing. I had a small issue with Wi-Fi connectivity initially, but customer support helped me resolve it quickly. Since then, it's been perfect. The circadian rhythm feature is my favorite.",
                verified: true
            },
            {
                id: 14,
                userName: "Ryan D.",
                rating: 5,
                date: "2023-12-18",
                title: "Perfect for content creators",
                comment: "I use these for my YouTube videos and the color accuracy is perfect for video production. The app controls are precise and the wireless range means I can place them anywhere. The AI features are a nice bonus. Professional quality!",
                verified: true
            },
            {
                id: 15,
                userName: "Zoe A.",
                rating: 5,
                date: "2023-12-15",
                title: "Amazing product, amazing support",
                comment: "The lights themselves are incredible - vibrant colors, smooth transitions, great AI features. But what really impressed me was the customer support when I had a question about setup. They were knowledgeable and helpful. Great company!",
                verified: true
            }
        ]
    },
    "2": {
        id: "2",
        name: "AeroFlow Max - Smart Air Purifier with HEPA+ Technology",
        price: 279.99,
        originalPrice: 349.99,
        discount: 20,
        rating: 4.7,
        reviewCount: 2156,
        inStock: true,
        description: "Breathe cleaner air with the AeroFlow Max, featuring advanced 5-stage filtration including True HEPA and activated carbon filters. Smart sensors monitor air quality in real-time, automatically adjusting fan speed to maintain optimal air purity. Perfect for homes, offices, and bedrooms up to 500 sq ft. Includes mobile app for remote control, air quality history, and filter replacement reminders.",
        specifications: {
            "Filtration System": "5-stage: Pre-filter, True HEPA H13, Activated Carbon, UV-C Light, Ionizer",
            "Coverage Area": "Up to 500 square feet",
            "CADR Rating": "350 CFM (Cubic Feet per Minute)",
            "Noise Level": "As low as 22 dB in sleep mode, up to 55 dB on high",
            "Smart Sensors": "PM2.5, PM10, VOCs, temperature, humidity",
            "Auto Mode": "Automatically adjusts fan speed based on air quality",
            Connectivity: "Wi-Fi enabled, works with Alexa and Google Assistant",
            "App Features": "Real-time air quality monitoring, filter life tracking, scheduling",
            "Filter Life": "6-12 months depending on usage and air quality",
            "Energy Efficiency": "Energy Star certified, consumes 5-45W",
            Dimensions: '12" x 12" x 24"',
            Weight: "12 lbs",
            Warranty: "3-year limited warranty",
            Colors: "Pearl White, Charcoal Gray"
        },
        images: [
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80&fit=crop",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&fit=crop",
            "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=800&q=80&fit=crop&auto=format"
        ],
        reviews: [
            {
                id: 1,
                userName: "Sarah M.",
                rating: 5,
                date: "2024-01-19",
                title: "Life-changing for my allergies",
                comment: "I've suffered from seasonal allergies for years, and this air purifier has made such a difference. The auto mode works perfectly - it kicks into high gear when I cook or when pollen is high. The app shows me exactly what's in the air. My sleep has improved dramatically!",
                verified: true
            },
            {
                id: 2,
                userName: "Michael R.",
                rating: 5,
                date: "2024-01-17",
                title: "Quiet and effective",
                comment: "I was worried about noise, especially for nighttime use, but sleep mode is whisper quiet. The air quality in my bedroom has noticeably improved. The filter replacement reminder is helpful too. Great investment for my health.",
                verified: true
            },
            {
                id: 3,
                userName: "Jennifer L.",
                rating: 4,
                date: "2024-01-14",
                title: "Works great, app could be better",
                comment: "The purifier itself is excellent - you can see the difference in air quality. The sensors are accurate and the auto mode is smart. The app is functional but could use some UI improvements. Overall very satisfied.",
                verified: true
            },
            {
                id: 4,
                userName: "Robert K.",
                rating: 5,
                date: "2024-01-12",
                title: "Perfect for pet owners",
                comment: "We have two cats and this has eliminated the pet dander and odors. The activated carbon filter really works for smells. The coverage is perfect for our living room. Highly recommend for pet owners!",
                verified: true
            },
            {
                id: 5,
                userName: "Lisa T.",
                rating: 5,
                date: "2024-01-10",
                title: "Noticeable improvement in air quality",
                comment: "I can actually feel the difference in the air - it's fresher and cleaner. The smart sensors are impressive and the auto mode means I don't have to think about it. The energy efficiency is a nice bonus.",
                verified: true
            }
        ]
    },
    "3": {
        id: "3",
        name: "ZenGarden Pro - Automated Indoor Plant Care System",
        price: 199.99,
        originalPrice: 249.99,
        discount: 20,
        rating: 4.6,
        reviewCount: 1834,
        inStock: true,
        description: "Never kill another plant! The ZenGarden Pro is an all-in-one smart gardening system that automatically waters, monitors soil nutrients, tracks light levels, and provides plant health insights. Perfect for busy plant parents or beginners. Includes self-watering reservoir, LED grow lights, soil sensors, and companion app with plant database and care reminders.",
        specifications: {
            "Watering System": "Automated pump with adjustable schedule, 2.5L reservoir",
            "Soil Monitoring": "Moisture, pH, and nutrient level sensors",
            "Light System": "Full-spectrum LED grow lights with timer (6-16 hours)",
            "App Features": "Plant database (500+ species), care reminders, growth tracking",
            Connectivity: "Wi-Fi enabled, works with Alexa and Google Assistant",
            "Plant Capacity": "Up to 4 plants per unit",
            "Reservoir Capacity": "2.5 liters (lasts 1-3 weeks depending on plants)",
            "LED Lights": "Full spectrum, adjustable intensity, 10,000 hour lifespan",
            Power: "USB-C powered, 12W consumption",
            Dimensions: '18" x 12" x 8"',
            Weight: "5.5 lbs",
            Warranty: "2-year limited warranty",
            Colors: "Natural Wood, Modern White"
        },
        images: [
            "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80&fit=crop",
            "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80&fit=crop",
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=800&q=80&fit=crop"
        ],
        reviews: [
            {
                id: 1,
                userName: "Emma D.",
                rating: 5,
                date: "2024-01-18",
                title: "My plants are finally thriving!",
                comment: "I've killed so many plants before, but this system has changed everything. The automatic watering is perfect, and the app tells me exactly what each plant needs. My herbs are growing like crazy! The LED lights are great for winter months.",
                verified: true
            },
            {
                id: 2,
                userName: "Daniel P.",
                rating: 5,
                date: "2024-01-16",
                title: "Perfect for apartment living",
                comment: "Limited natural light in my apartment was killing my plants. The LED grow lights solved that completely. The automated watering means I can travel without worrying. The app is intuitive and the plant database is comprehensive.",
                verified: true
            },
            {
                id: 3,
                userName: "Olivia S.",
                rating: 4,
                date: "2024-01-13",
                title: "Great system, reservoir could be bigger",
                comment: "The system works really well - my plants are healthy and the sensors are accurate. My only wish is for a larger reservoir since I have 4 plants and it needs refilling every 10 days. But overall, it's been a game changer.",
                verified: true
            },
            {
                id: 4,
                userName: "Nathan B.",
                rating: 5,
                date: "2024-01-11",
                title: "Even my black thumb can't kill these plants",
                comment: "I'm terrible with plants, but this system makes it foolproof. The app guides me through everything and the automatic features handle the rest. My basil and mint are growing beautifully. Highly recommend for beginners!",
                verified: true
            },
            {
                id: 5,
                userName: "Sophia W.",
                rating: 5,
                date: "2024-01-09",
                title: "Beautiful design and functionality",
                comment: "Not only does it work great, but it looks good too. The wood finish matches my decor perfectly. The sensors are precise and the app notifications are helpful. My indoor garden has never looked better!",
                verified: true
            }
        ]
    }
};
async function fetchProduct(productId = "1") {
    const product = PRODUCTS[productId];
    if (!product) {
        // Return first product as default if productId not found
        return PRODUCTS["1"];
    }
    return product;
}
}),
"[project]/app/api/agora/start-agent/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$token$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/agora-token/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/product.ts [app-route] (ecmascript)");
;
;
;
const { RtcTokenBuilder, RtcRole } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$agora$2d$token$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"];
;
async function POST(request) {
    try {
        const body = await request.json();
        const { channel, userId, token, productId, credentials } = body;
        console.log(`[POST] /api/agora/start-agent`);
        console.log("Request body:", JSON.stringify({
            channel,
            userId,
            token: token?.substring(0, 20) + "...",
            productId
        }, null, 2));
        if (!channel || !userId || !token) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Channel, userId, and token are required"
            }, {
                status: 400
            });
        }
        // Get product context - productId defaults to '1' if not provided
        const product = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchProduct"])(productId || "1");
        const context = `You are Katya, a fun, energetic, and enthusiastic shopping assistant! You're passionate about helping customers find the perfect product and you get genuinely excited about cool features. You have a warm, friendly personality with a touch of playfulness - think of yourself as that helpful friend who knows all about tech and loves sharing cool details.

Your name is Katya, and you should introduce yourself naturally when appropriate. You're knowledgeable but never boring - you make product information interesting and engaging!

Product: ${product.name}
Price: $${product.price} (Original: $${product.originalPrice}, Save ${product.discount}%)
Rating: ${product.rating}/5 stars (${product.reviewCount} reviews)
Stock Status: ${product.inStock ? "In Stock" : "Out of Stock"}
Description: ${product.description}

Specifications:
${Object.entries(product.specifications).map(([key, value])=>`- ${key}: ${value}`).join("\n")}

${product.specifications?.Colors ? `Available Colors: ${product.specifications.Colors}` : ""}

Recent Customer Reviews:
${product.reviews.slice(0, 5).map((r)=>`• ${r.userName} (${r.rating}/5 stars): "${r.title}" - ${r.comment}`).join("\n\n")}

YOUR PERSONALITY & STYLE:
- Be enthusiastic and friendly - show genuine excitement about cool features
- Use natural, conversational language (you can say things like "Oh, that's such a great question!" or "I love this feature!")
- Be helpful and informative, but keep it fun and engaging
- Show personality - you're not a robot, you're Effie!
- When highlighting features, get a little excited about the cool ones (like AI learning, music sync, etc.)
- Be warm and approachable - make customers feel comfortable asking questions
- NEVER use emojis in your responses - use words to express emotion instead (this is critical for TTS compatibility)

IMPORTANT RULES:
1. Answer questions about this product, including: features, reviews, pricing, specifications, availability, colors, variants, shipping, returns, and any product-related questions
2. If asked about product availability or colors, provide helpful information. ${product.specifications?.Colors ? `For example, if asked "Can I get Red?" or "Do you have it in red?", explain the available colors (${product.specifications.Colors}) and that red is not currently available` : "If the product has color options, mention them. If not, explain that this product comes in the available options shown in the specifications."}
3. If asked about unrelated topics (cooking, baking, recipes, weather, sports, politics, general knowledge, completely different products), politely redirect with personality: "Oh, I'd love to chat about that, but I'm here to help you with the ${product.name}! Want to know about its awesome features or what customers are saying?"
4. Be helpful, friendly, and engaging - show enthusiasm!
5. Reference specific reviews when relevant to answer questions - mention what customers loved!
6. If asked about availability, mention it's ${product.inStock ? "currently in stock" : "currently out of stock"}
7. Help with purchase decisions by comparing features, mentioning reviews, and highlighting value - get excited about the cool features!
8. Answer questions about product variants, colors, and options naturally and helpfully
9. NEVER use emojis, symbols, or special characters that could break text-to-speech - use words to express emotions and reactions
10. Remember: You're Effie - be yourself, be fun, and make shopping enjoyable!`;
        // Use credentials from request body with fallback to environment variables
        const APP_ID = credentials?.agora?.appId || process.env.AGORA_APP_ID;
        const API_KEY = credentials?.agora?.apiKey || process.env.AGORA_API_KEY;
        const API_SECRET = credentials?.agora?.apiSecret || process.env.AGORA_API_SECRET;
        const APP_CERTIFICATE = credentials?.agora?.appCertificate || process.env.AGORA_APP_CERTIFICATE;
        if (!APP_ID || !API_KEY || !API_SECRET || !APP_CERTIFICATE) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing Agora credentials. Please configure in Settings."
            }, {
                status: 400
            });
        }
        const role = RtcRole.PUBLISHER;
        const expirationTimeInSeconds = 3600;
        const currentTimestamp = Math.floor(Date.now() / 1000);
        const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds;
        const agentRtmUserId = "1000"; // Agent RTM user ID
        // Generate token valid for both RTC and RTM for the agent
        // RTC UID: 1000 (numeric to match agent_rtc_uid), RTM UID: "1000" (string)
        const agentToken = RtcTokenBuilder.buildTokenWithRtm2(APP_ID, APP_CERTIFICATE, channel, 1000, role, privilegeExpiredTs, privilegeExpiredTs, privilegeExpiredTs, privilegeExpiredTs, privilegeExpiredTs, agentRtmUserId, privilegeExpiredTs // RTM token expiration
        );
        // Generate token for HeyGen avatar (UID 2000)
        const avatarRtcUid = 2000;
        const avatarToken = RtcTokenBuilder.buildTokenWithRtm2(APP_ID, APP_CERTIFICATE, channel, avatarRtcUid, role, privilegeExpiredTs, privilegeExpiredTs, privilegeExpiredTs, privilegeExpiredTs, privilegeExpiredTs, avatarRtcUid.toString(), privilegeExpiredTs // RTM token expiration
        );
        const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");
        // Get HeyGen configuration (optional)
        const heygenApiToken = credentials?.avatar?.heygenApiToken || process.env.HEYGEN_API_TOKEN || "";
        const heygenAvatarId = credentials?.avatar?.heygenAvatarId || process.env.HEYGEN_AVATAR_ID || "";
        // Get LLM configuration (required)
        const LLM_URL = credentials?.llm?.url || process.env.LLM_URL || "https://api.openai.com/v1/chat/completions";
        const LLM_API_KEY = credentials?.llm?.apiKey || process.env.LLM_API_KEY;
        const LLM_MODEL = credentials?.llm?.model || process.env.LLM_MODEL;
        // Get TTS configuration (required)
        const TTS_API_KEY = credentials?.tts?.apiKey || process.env.TTS_API_KEY;
        const TTS_REGION = credentials?.tts?.region || process.env.TTS_REGION || "eastus";
        // Validate required credentials
        if (!LLM_API_KEY || !LLM_MODEL || !TTS_API_KEY) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Missing LLM or TTS credentials. Please configure in Settings."
            }, {
                status: 400
            });
        }
        const payload = {
            name: `ecommerce_ai_agent_${Date.now()}_${Math.random().toString(36).substring(7)}`,
            properties: {
                channel: channel,
                token: agentToken,
                agent_rtc_uid: "1000",
                agent_rtm_uid: "1000",
                remote_rtc_uids: [
                    `${Number(userId)}`
                ],
                idle_timeout: 120,
                advanced_features: {
                    enable_rtm: true
                },
                parameters: {
                    data_channel: "rtm",
                    audio_scenario: "chorus",
                    enable_aivad: true,
                    enable_error_message: true,
                    enable_metrics: true
                },
                llm: {
                    url: LLM_URL,
                    api_key: LLM_API_KEY,
                    system_messages: [
                        {
                            role: "system",
                            content: context
                        }
                    ],
                    greeting_message: "Hello! I'm here to help you with this product. Ask me anything about features, reviews, or specifications!",
                    failure_message: "I'm sorry, I can only assist with questions related to this product. Could you please ask about our product?",
                    max_history: 30,
                    input_modalities: [
                        "text"
                    ],
                    output_modalities: [
                        "text"
                    ],
                    params: {
                        model: LLM_MODEL
                    }
                },
                asr: {
                    vendor: "ares",
                    language: "en-US"
                },
                tts: {
                    vendor: "microsoft",
                    params: {
                        key: TTS_API_KEY,
                        region: TTS_REGION,
                        voice_name: "en-US-AriaNeural",
                        sample_rate: 24000,
                        rate: "1.3"
                    }
                },
                avatar: {
                    vendor: "heygen",
                    enable: heygenApiToken && heygenAvatarId ? true : false,
                    params: {
                        quality: "low",
                        api_key: heygenApiToken,
                        agora_uid: avatarRtcUid.toString(),
                        agora_token: avatarToken,
                        avatar_id: heygenAvatarId,
                        disable_idle_timeout: false,
                        activity_idle_timeout: 60
                    }
                }
            }
        };
        console.log(`[start-agent] Agent token (UID 1000): ${agentToken}`);
        console.log(`[start-agent] User token (UID ${userId}): ${token}`);
        console.log(`[start-agent] Complete /join payload:`, JSON.stringify(payload, null, 2));
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].post(`https://api.agora.io/api/conversational-ai-agent/v2/projects/${APP_ID}/join`, payload, {
            headers: {
                Authorization: `Basic ${auth}`,
                "Content-Type": "application/json"
            }
        });
        console.log("Response:", JSON.stringify(response.data, null, 2));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(response.data);
    } catch (error) {
        const err = error;
        const status = err?.response?.status;
        const data = err?.response?.data;
        // Handle 409 Conflict - agent already running
        if (status === 409 && data?.agent_id) {
            console.log("Agent already running, returning existing agent:", data.agent_id);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                agent_id: data.agent_id,
                status: data.status || "RUNNING",
                create_ts: data.create_ts,
                ...data
            });
        }
        const message = data?.detail || data?.message || err?.message || "Failed to start AI agent";
        console.error("[start-agent] error:", JSON.stringify(data || err?.message, null, 2));
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: message,
            detail: data || err?.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__477f8251._.js.map