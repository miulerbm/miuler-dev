import { postsEn, postsEs } from "#site/content";
import { StickyNote } from "lucide-react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";

interface CommandSearchProps {
  locale: string;
}

export default function CommandSearch({ locale }: CommandSearchProps) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const t = useTranslations();

  const posts = locale === "es" ? postsEs : postsEn;

  const handleSelect = (slug: string) => {
    setIsOpen(false);
    router.push(`/${slug}`);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="p-2 border border-gray-300 rounded-md"
      >
        {t("searchPosts")} ⌘K
      </Button>
      {isOpen && (
        <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
          <CommandInput placeholder="Search posts" />
          <CommandGroup heading="Posts">
            <CommandEmpty>{t("noPostsFound")}</CommandEmpty>
            <CommandList>
              {posts.map((post) => (
                <CommandItem
                  key={post.slug}
                  onSelect={() => {
                    handleSelect(post.slug);
                  }}
                >
                  <StickyNote className="mr-2 h-4 w-4" />
                  <span>{post.title}</span>
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </CommandDialog>
      )}
    </>
  );
}
