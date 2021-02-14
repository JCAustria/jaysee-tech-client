import Nav from "@/layouts/nav";
import { fetchAPI } from "lib/api";
import { GetStaticProps } from "next";

type BlogProps = {
  posts: any;
  author: any;
};
const Blog = ({ posts, author }: BlogProps) => {
  return (
    <>
      <Nav />
      {console.log(posts, author)}
      <main>
        <header>
          <h1>{posts[0].title}</h1>
        </header>
        <article>
          <p>{posts[0].content}</p>
        </article>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const [posts, author] = await Promise.all([
    fetchAPI("/posts?status=published"),
    fetchAPI("/authors"),
  ]);
  return { props: { posts, author } };
};
export default Blog;
