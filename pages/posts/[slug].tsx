import Head from 'next/head';
import Nav from 'components/ui/nav';

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
      <Nav />
      <h1>Slug</h1>
    </>
  );
};

export default Post;
