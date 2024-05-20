import Link from "next/link";
import TitlePage from "../components/TitlePage";

const Home = () => {
  return (
    <>
      <TitlePage title="Home" />
      <Link href="/blog">Blog</Link>
    </>
  );
};

export default Home;
