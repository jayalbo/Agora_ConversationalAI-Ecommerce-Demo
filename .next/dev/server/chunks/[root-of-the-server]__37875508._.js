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
"[project]/app/api/product/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// Mock product data with reviews
const product = {
    id: '1',
    name: 'LuminaSphere Pro - AI-Powered Ambient Lighting System',
    price: 349.99,
    originalPrice: 449.99,
    discount: 22,
    rating: 4.8,
    reviewCount: 3421,
    inStock: true,
    description: 'Transform any space with the LuminaSphere Pro, an intelligent ambient lighting system that adapts to your mood, music, and daily routines. Featuring advanced AI algorithms that learn your preferences, 16.7 million color combinations, and seamless smart home integration. Perfect for creating the perfect atmosphere for work, relaxation, gaming, or entertainment. The system includes multiple wireless orbs that sync together, voice control compatibility, and a mobile app with scene presets and custom color palettes.',
    specifications: {
        'AI Engine': 'Neural network learns your lighting preferences over time',
        'Color Range': '16.7 million colors with 99% color accuracy',
        'Brightness': 'Up to 2000 lumens per orb (adjustable 1-100%)',
        'Connectivity': 'Wi-Fi 6, Bluetooth 5.3, Matter protocol, Zigbee hub',
        'Voice Control': 'Works with Alexa, Google Assistant, Apple HomeKit, Siri',
        'Music Sync': 'Real-time audio reactive lighting with 0.1ms latency',
        'Smart Features': 'Circadian rhythm adjustment, sunrise/sunset simulation, motion detection',
        'Power': 'USB-C charging, 8-hour battery life, wireless charging pad included',
        'Range': 'Up to 50 feet wireless range, supports up to 12 orbs per system',
        'App Features': 'Scene library (100+ presets), custom animations, scheduling, geofencing',
        'Materials': 'Premium aluminum and tempered glass construction',
        'Dimensions': 'Orb: 4.5" diameter, Base: 3" x 3" x 0.5"',
        'Warranty': '2-year limited warranty with lifetime software updates',
        'Colors': 'Midnight Black, Arctic White, Cosmic Silver, Aurora Blue'
    },
    images: [
        'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=800',
        'https://images.unsplash.com/photo-1513828583688-c52646db42da?w=800',
        'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    ],
    reviews: [
        {
            id: 1,
            userName: 'Alexandra K.',
            rating: 5,
            date: '2024-01-20',
            title: 'Absolutely magical! My apartment feels like a different place',
            comment: 'I\'ve had this for 3 months now and I\'m still amazed every day. The AI has learned my schedule perfectly - it dims for movie nights, brightens for morning work, and syncs beautifully with my music. The color accuracy is incredible and the app is intuitive. Worth every penny!',
            verified: true
        },
        {
            id: 2,
            userName: 'Marcus T.',
            rating: 5,
            date: '2024-01-18',
            title: 'Best smart lighting system I\'ve ever used',
            comment: 'The music sync feature is mind-blowing. I threw a party and everyone was asking where I got these lights. The setup was surprisingly easy, and the Matter protocol means it works with all my existing smart home stuff. The circadian rhythm feature has actually improved my sleep!',
            verified: true
        },
        {
            id: 3,
            userName: 'Sophie L.',
            rating: 5,
            date: '2024-01-15',
            title: 'Perfect for my home office',
            comment: 'I work from home and the adaptive lighting has been a game changer. It automatically adjusts throughout the day to keep me alert in the morning and relaxed in the evening. The voice control works flawlessly with my Alexa. The build quality feels premium.',
            verified: true
        },
        {
            id: 4,
            userName: 'James R.',
            rating: 4,
            date: '2024-01-12',
            title: 'Great product, minor app quirk',
            comment: 'The lights themselves are fantastic - colors are vibrant and the AI features work well. My only complaint is the app can be a bit slow sometimes when switching between scenes, but it\'s not a dealbreaker. Overall very satisfied with the purchase.',
            verified: true
        },
        {
            id: 5,
            userName: 'Emma W.',
            rating: 5,
            date: '2024-01-10',
            title: 'My kids love it for their gaming setup',
            comment: 'Bought this for my teenager\'s room and they\'re obsessed. The music sync during gaming is incredible - the lights react to every sound. The wireless range is impressive, and the battery life is solid. Great value for what you get.',
            verified: true
        },
        {
            id: 6,
            userName: 'David M.',
            rating: 5,
            date: '2024-01-08',
            title: 'Exceeded all expectations',
            comment: 'I was skeptical about the AI features, but they actually work! The system has learned my preferences and now I rarely need to adjust anything manually. The sunrise simulation wakes me up naturally. Integration with HomeKit is seamless.',
            verified: true
        },
        {
            id: 7,
            userName: 'Rachel P.',
            rating: 4,
            date: '2024-01-05',
            title: 'Beautiful lighting, wish it had more preset scenes',
            comment: 'The quality and colors are amazing. The build feels premium and the app is well-designed. I just wish there were more preset scenes in the library - though you can create custom ones, which is nice. The price is fair for what you get.',
            verified: true
        },
        {
            id: 8,
            userName: 'Kevin H.',
            rating: 5,
            date: '2024-01-03',
            title: 'Perfect for movie nights',
            comment: 'The ambient lighting during movies creates an immersive experience. The lights automatically dim and adjust based on the content. Setup was straightforward and the wireless charging is convenient. Highly recommend!',
            verified: true
        },
        {
            id: 9,
            userName: 'Maya S.',
            rating: 5,
            date: '2023-12-30',
            title: 'Worth every dollar',
            comment: 'I\'ve tried several smart lighting systems and this is by far the best. The AI actually makes a difference - it knows when I\'m working vs relaxing. The color range is incredible and the music sync is instant. Customer service was also helpful when I had a question.',
            verified: true
        },
        {
            id: 10,
            userName: 'Chris B.',
            rating: 4,
            date: '2023-12-28',
            title: 'Great but battery could be better',
            comment: 'Love the features and the quality is top-notch. The only thing I\'d improve is the battery life - 8 hours is decent but I wish it lasted longer for all-day use. The wireless charging helps though. Overall very happy with the purchase.',
            verified: true
        },
        {
            id: 11,
            userName: 'Nina F.',
            rating: 5,
            date: '2023-12-25',
            title: 'Transformed my living room',
            comment: 'These lights completely changed the vibe of my space. The AI has learned my preferences perfectly and the scene library has so many options. The Matter protocol integration was seamless with my existing smart home setup. Beautiful design too!',
            verified: true
        },
        {
            id: 12,
            userName: 'Tom G.',
            rating: 5,
            date: '2023-12-22',
            title: 'Best purchase of the year',
            comment: 'I\'m a tech enthusiast and this is one of the coolest products I\'ve bought. The neural network learning is legit - it gets smarter every week. The music sync latency is imperceptible. The build quality is excellent. Can\'t recommend enough!',
            verified: true
        },
        {
            id: 13,
            userName: 'Lily C.',
            rating: 4,
            date: '2023-12-20',
            title: 'Love it, minor connectivity issue',
            comment: 'The lights are beautiful and the features are amazing. I had a small issue with Wi-Fi connectivity initially, but customer support helped me resolve it quickly. Since then, it\'s been perfect. The circadian rhythm feature is my favorite.',
            verified: true
        },
        {
            id: 14,
            userName: 'Ryan D.',
            rating: 5,
            date: '2023-12-18',
            title: 'Perfect for content creators',
            comment: 'I use these for my YouTube videos and the color accuracy is perfect for video production. The app controls are precise and the wireless range means I can place them anywhere. The AI features are a nice bonus. Professional quality!',
            verified: true
        },
        {
            id: 15,
            userName: 'Zoe A.',
            rating: 5,
            date: '2023-12-15',
            title: 'Amazing product, amazing support',
            comment: 'The lights themselves are incredible - vibrant colors, smooth transitions, great AI features. But what really impressed me was the customer support when I had a question about setup. They were knowledgeable and helpful. Great company!',
            verified: true
        }
    ]
};
async function GET() {
    console.log(`\n[GET] /api/product`);
    console.log("Response:", JSON.stringify(product, null, 2));
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(product);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__37875508._.js.map