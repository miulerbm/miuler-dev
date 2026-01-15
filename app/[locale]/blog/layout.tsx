// app/[locale]/blog/layout.tsx
import { NextIntlClientProvider, useMessages } from "next-intl";
import "../../globals.css";
import { Metadata } from "next";
import React from "react";
import { siteConfig } from "@/config/site";

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl =
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_PUBLIC_APP_URL ?? siteConfig.url
      : "http://localhost:3000";

  const url = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;

  return {
    title: "Miuler's blog",
    description: "Bits of my developer path.",
    metadataBase: new URL(url),
    openGraph: {
      title: "Blog",
      description: "My blog",
      type: "article",
      url: `${url}/blog`,
      images: [
        {
          url: `${url}/images/og-blog.jpg`,
          width: 1200,
          height: 630,
          alt: "Blogs image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Miuler's blog",
      description: "Bits of my developer path.",
      images: [`${url}/images/og-blog.jpg`],
    },
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
