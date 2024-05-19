import Timeline from "@/components/timeline";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Me",
  description: "Information about me",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div>
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-x-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">
              About me
            </h1>
          </div>
        </div>
        <hr className="my-8" />
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="min-w-48 max-w-48 flex flex-col gap-2">
            <Avatar className="h-48 w-48">
              <AvatarImage src="/avatar.png" alt={siteConfig.author} />
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-center break-words">
              {siteConfig.author}
            </h2>
            <p className="text-muted-foreground text-center break-words">
              Frontend Developer
            </p>
          </div>
          <p className="text-muted-foreground text-lg text-pretty py-4">
            I&apos;m a frontend developer with a bachelor&apos;s degree in
            Mechatronics Engineering. So far I&apos;ve been working with an
            amazing team at Gope, a peruvian startup where we&apos;re building
            an application for connecting people and different recreational
            activities such as tours, adventures, extreme sports, etc.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-x-4">
            <h1 className="inline-block font-black text-4xl lg:text-5xl ">
              Experience
            </h1>
          </div>
        </div>
        <hr className="my-8" />
        <Timeline />
        <hr className="my-8" />
        <div className="flex flex-row justify-center">
          <Link
            target="_blank"
            href="https://drive.google.com/file/d/1mPAxMKi1W5rXFAjojRBVLVBJrM8mCbax/view?usp=sharing"
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full sm:w-fit hover:scale-105"
            )}
          >
            Get my CV
          </Link>
        </div>
      </div>
    </div>
  );
}
