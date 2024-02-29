import { readdir } from 'fs/promises'
import logo from "~/assets/annie-sexton-logo.png";
import { MetaFunction, json } from "@remix-run/node";
import PostPreview from "~/components/PostPreview";
import { useLoaderData } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: "Annie Sexton | Developer Advocate & JavaScript Specialist" },
    { name: "description", content: "I'm a multi-faceted software developer and developer advocate with over 11 years of experience working on everything from software engineering to UX design. I've spent most of my career in the wonderful world of developer tooling, and I love working with talented teams to craft unparalleled user experiences." },
  ];
};

export async function loader() {
  // for each folder in the blog directory, get the meta file

  const dirs = await readdir('app/blog', { withFileTypes: true })
  const posts = dirs.map(dir => {
    return import(`../app/blog/${dir.name}/meta`)
  })

  return json({ posts });
}

export default function Blog() {
  const data = useLoaderData<typeof loader>();
  console.log(data)
  const post = {
    title: "The Power of Remix",
    date: "2021-08-01",
    slug: "the-power-of-remix",
    url: "/blog/the-power-of-remix",
    excerpt: "Remix is a full-stack web framework that's built for the modern web. It's a great way to build web applications that are both fast and reliable."
  }
  return (
    <>
      <nav className="py-8 px-10">
        <div className="flex items-center gap-6">
          <a href="/"><img src={logo} alt="Annie Sexton" className="w-[300px]"/></a>
          <div className="text-gray-200 text-2xl">/</div>
          <a href="/blog" className="uppercase text-2xl tracking-wider text-gray-400">blog</a>
        </div>
      </nav>
      <div>
        <PostPreview post={post} />
      </div>
    </>
  );
}