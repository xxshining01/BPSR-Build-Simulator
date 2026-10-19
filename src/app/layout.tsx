// ไฟล์: src/app/layout.tsx
import React from "react";

export const metadata = {
    title: "BPSR Build & Combat Simulator — Blue Protocol: Star Resonance",
    description: "Lv.60 Character Build Planner & 5-Minute Auto-Rotation DPS/HPS Simulator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="th">
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <body className="bg-slate-950 text-slate-100 min-h-screen font-sans antialiased">
                {children}
            </body>
        </html>
    );
}