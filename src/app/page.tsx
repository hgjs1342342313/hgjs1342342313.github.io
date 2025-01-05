import Image from "next/image";
import Link from "next/link";
import { markdownToHtml } from "@/lib/markdownToHtml";

export default async function Home() {
  // 解析 Markdown 文件
  const resumeHtml = await markdownToHtml("./resume/resume.md");

  return (
    <div className="grid grid-rows-[auto_1fr] min-h-screen font-[family-name:var(--font-geist-sans)]">
      {/* Header */}
      <header className="bg-white dark:bg-black p-4 border-b border-black/[.08] dark:border-white/[.145]">
        <nav className="flex justify-center gap-6">
          <Link
            href="/"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            主页
          </Link>
          <Link
            href="/learn"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            学习
          </Link>
          <Link
            href="/life"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          >
            生活
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="flex flex-col items-center p-8 pb-20 gap-16 sm:p-20">
        {/* 个人简历 */}
        <article
          className="prose dark:prose-invert max-w-screen-lg mx-auto"
          dangerouslySetInnerHTML={{ __html: resumeHtml }}
        />
      </main>
    </div>
  );
}