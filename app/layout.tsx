import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pulse — Team Engineering Analytics",
  description:
    "Pulse turns engineering work signals into actionable health dashboards for teams.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        <script
          // Runs before React hydrates so the page paints in the right theme.
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{const saved=localStorage.getItem('pulse_theme');const prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;const next=saved==='dark'||saved==='light'?saved:(prefersDark?'dark':'light');document.documentElement.classList.toggle('dark', next==='dark');}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
