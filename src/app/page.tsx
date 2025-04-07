import { BlogPosts } from "@/components/posts";
import Link from "next/link";
export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
        Vim's keystroke commands and tabs' flexibility for personal viewing
        preferences. This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.`}
      </p>
      <div className="my-8">
        <div className="fixed right-3 border-2 bg-slate-800 p-2 rounded-md text-white">
          <Link href="/blog/cheatsheets/postgresql">Postgresql Cheatsheet</Link>
        </div>
        <BlogPosts />
      </div>
    </section>
  );
}
