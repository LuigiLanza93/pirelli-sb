import { Providers } from "./providers";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pirelli SW - Foundations and Components",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
