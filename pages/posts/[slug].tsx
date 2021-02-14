import Head from "next/head";

type PostProps = {
  slug: string;
  content: string;
};
const Post = ({ slug, content }: PostProps) => {
  return (
    <>
      <Head key={slug}>
        <meta name="description" content={content} />
      </Head>
    </>
  );
};

export default Post;
