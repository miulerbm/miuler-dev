// app/[locale]/blog/layout.tsx
import { NextIntlClientProvider, useMessages } from "next-intl";
import "../../globals.css";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "My Blog",
  description: "This is a description of my blog",
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
