export const metadata = {
  title: "Blog",
  description: "Blog - Genereted by create next app",
};

import TitlePage from "@/app/components/TitlePage";
import Link from "next/link";

export const POST = [
  {
    id: 1,
    title: "Post 1",
    slug: "post-1",
    content: "lorem ipsum dolor sit amet consectutor adipising elit",
  },
  {
    id: 2,
    title: "Post 2",
    slug: "post-2",
    content: "lorem ipsum dolor sit amet consectutor adipising elit",
  },
  {
    id: 3,
    title: "Post 3",
    slug: "post-3",
    content: "lorem ipsum dolor sit amet consectutor adipising elit",
  },
];

const Blog = () => {
  return (
    <>
      <TitlePage title="Blog" />
      <Link href="/perfil">IR AL PERFIL</Link>
      <main className="container mx-auto">
        <div className="grid gap-5">
          {POST.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-md p-5">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <Link href={`/blog/${post.slug}`}>More info</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Blog;
