"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Icons } from "./icons";

export function LangSwitch() {
  const pathname = usePathname();

  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="w-10 px-0">
          <div className={cn(buttonVariants({ variant: "ghost" }))}>
            <Icons.langSwitch className="h-4 w-4" />
            <span className="sr-only">Language</span>
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={() => router.push(pathname.replace("es" || "de", "en"))}
          >
            <Link
              locale="en"
              href={pathname.replace("es" || "de", "en")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname.includes("/en")
                  ? "text-foreground"
                  : "text-foreground/50"
              )}
            >
              English
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => router.push(pathname.replace("en" || "de", "es"))}
          >
            <Link
              locale="en"
              href={pathname.replace("en" || "de", "es")}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname.includes("/es")
                  ? "text-foreground"
                  : "text-foreground/50"
              )}
            >
              Spanish
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
