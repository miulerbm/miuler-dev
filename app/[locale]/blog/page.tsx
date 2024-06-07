// app/[locale]/blog/page.tsx
"use client";
import { postsEn, postsEs } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Tag } from "@/components/tag";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { useState } from "react";

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  // const [searchQuery, setSearchQuery] = useState("");
  const currentPage = Number(searchParams?.page) || 1;

  const pathname = usePathname();
  const locale = pathname.split("/")[1];

  const posts = locale === "es" ? postsEs : postsEn;

  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  // const normalizedSearchQuery = searchQuery.trim().toLowerCase();

  // const filteredPosts = sortedPosts!.filter((post) => {
  //   const titleMatch = post.title.toLowerCase().includes(normalizedSearchQuery);
  //   const tagsMatch = post.tags.some((tag: string) =>
  //     tag.toLowerCase().includes(normalizedSearchQuery)
  //   );
  //   const descriptionMatch = post.description
  //     ? post.description.toLowerCase().includes(normalizedSearchQuery)
  //     : false;
  //   return titleMatch || tagsMatch || descriptionMatch;
  // });
  const totalPages = Math.ceil(sortedPosts!.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts!.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(sortedPosts!);
  const sortedTags = sortTagsByCount(tags);

  const createHref = (path: string) => `/${locale}${path}`;

  const t = useTranslations();

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justiy-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            {t("miulerBlog")}
          </h1>
          <p className="text-xl text-muted-foreground">
            {t("blogDescription")}
          </p>
        </div>
      </div>
      {/* <div className="my-4">
        <input
          type="text"
          placeholder={"Search"} // Asumiendo que tienes una traducción para el placeholder
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div> */}
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
          {displayPosts?.length > 0 ? (
            <ul className="flex flex-col">
              {displayPosts.map((post) => {
                const { slug, date, title, description, tags } = post;
                return (
                  <li key={slug}>
                    <PostItem
                      slug={slug}
                      date={date}
                      title={title}
                      description={description}
                      tags={tags}
                    />
                  </li>
                );
              })}
            </ul>
          ) : (
            <p>No posts</p>
          )}
          <QueryPagination
            totalPages={totalPages}
            className="justify-end mt-4"
          />
        </div>
        <Card className="col-span-12 row-start-3 h-fit sm:col-span-4 sm:col-start-9 sm:row-start-1">
          <CardHeader>
            <CardTitle>
              <a className="hover:underline" href={createHref("/tags")}>
                Tags
              </a>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <Tag tag={tag} key={tag} count={tags[tag]} />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
