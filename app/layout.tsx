import type { Metadata } from "next";
import { inter, sourceSerif } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cindariq | IT Asset Disposition Kenya",
  description:
    "Cindariq provides certified IT asset disposal, data destruction, and responsible e-waste recycling across Kenya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSerif.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-smoke text-cinder" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
