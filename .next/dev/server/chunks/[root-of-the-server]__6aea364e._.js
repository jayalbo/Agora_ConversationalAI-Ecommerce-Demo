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
"[project]/app/api/product/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/product.ts [app-route] (ecmascript)");
;
;
async function GET(request) {
    const searchParams = request.nextUrl.searchParams;
    const productId = searchParams.get('productId') || '1';
    console.log(`\n[GET] /api/product?productId=${productId}`);
    const product = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$product$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchProduct"])(productId);
    console.log("Response:", JSON.stringify(product, null, 2));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(product);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6aea364e._.js.map