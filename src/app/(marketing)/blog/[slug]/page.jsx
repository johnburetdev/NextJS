/* export const metadata = {
  title: "Blog",
  description: "Blog - Genereted by create next app",
}; */

import TitlePage from "@/app/components/TitlePage";
import { POST } from "../page";
import Link from "next/link";

export function generateMetadata({ params }) {
  const post = POST.find((post) => post.slug === params.slug);
  return {
    title: post.title,
    description: post.title + " - Genereted by create next app",
  };
}

const Slug = ({ params }) => {
  const post = POST.find((post) => post.slug === params.slug);

  return (
    <>
      <TitlePage title={post.title} />
      <p className="text-center">{post.content}</p>
      <div className="text-center">
        <Link
          href="/blog"
          className="bg-indigo-500 text-white font-bold py-2 px-4 rounded"
        >
          Volver
        </Link>
      </div>
    </>
  );
};

export default Slug;
