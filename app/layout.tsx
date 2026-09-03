import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AetherNexus — Harmonizing the Cosmos",
  description:
    "A living multi-agent knowledge lattice blending Hawaiian wayfinding, cosmic exploration, and functor harmony.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
