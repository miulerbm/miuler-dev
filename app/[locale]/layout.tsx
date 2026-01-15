import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import SiteHeader from "@/components/site-header";
import { Providers } from "@/components/providers";
import { siteConfig } from "@/config/site";
import { SiteFooter } from "@/components/site-footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import PageTransition from "@/components/page-transition";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url
      : "http://localhost:3000";

  // Remove trailing slash for consistency
  const url = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

  return {
    title: siteConfig.name,
    description: siteConfig.description,
    metadataBase: new URL(url),
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_ES" : "en_US",
      url: `${url}/${locale}`,
      siteName: siteConfig.name,
      title: siteConfig.name,
      description: siteConfig.description,
      images: [
        {
          url: `${url}/images/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Miuler's site",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: siteConfig.name,
      description: siteConfig.description,
      images: [`${url}/images/og-image.jpg`],
      creator: "@blas_miuler",
    },
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: {
    locale: "en" | "es";
  };
}) {
  const messages = useMessages();
  return (
    <NextIntlClientProvider messages={messages}>
      <html lang={locale} className="scroll-pt-[3.5rem]">
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            inter.variable
          )}
        >
          <Providers>
            <div className="relative flex min-h-dvh flex-col bg-background">
              <SiteHeader />
              {/* <PageTransition> */}
              <main className="flex-1">{children}</main>
              {/* </PageTransition> */}
              <SiteFooter />
            </div>
          </Providers>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
