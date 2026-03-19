import type { Metadata } from "next";
import { Bricolage_Grotesque, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "IMPULSO | Estrategia Digital de Alta Velocidad",
  description: "Impulsamos el crecimiento digital de tu marca con estrategias de precisión y ejecución táctica de alto impacto.",
  keywords: ["Impulso", "Estrategia Digital", "Marketing Digital", "Crecimiento", "Social Media", "Performance Marketing"],
  authors: [{ name: "IMPULSO" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "IMPULSO | Estrategia Digital de Alta Velocidad",
    description: "Impulsamos el crecimiento digital de tu marca con estrategias de precisión y ejecución táctica de alto impacto.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IMPULSO | Estrategia Digital de Alta Velocidad",
    description: "Impulsamos el crecimiento digital de tu marca con estrategias de precisión y ejecución táctica de alto impacto.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="light" suppressHydrationWarning>
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${bricolageGrotesque.variable} ${plusJakarta.variable} ${spaceGrotesk.variable} antialiased bg-[#FDFFFF] text-[#012544] font-body overflow-x-hidden`}
      >
        <div className="page-wrapper">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
