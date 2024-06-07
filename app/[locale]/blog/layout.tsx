// app/[locale]/blog/layout.tsx
import { NextIntlClientProvider, useMessages } from "next-intl";
import "../../globals.css";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Miuler's blog",
  description: "Bits of my developer path.",
};

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
