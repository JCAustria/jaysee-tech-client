import Nav from 'components/nav';
import { fetchAPI } from 'lib/api';
import { GetStaticProps } from 'next';
import SC from 'components/blog.sc';
import Card from 'components/card';
type BlogProps = {
  posts: PostProps[];
};

export type PostProps = {
  slug: string | number | null | undefined;
  image: { url: string };
  title: string;
};

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <>
      <Nav />
      <SC.MainBlogPage>
        <SC.Wrapper>
          {posts.map((post: PostProps) => {
            return <Card article={post} key={post.slug} />;
          })}
        </SC.Wrapper>
      </SC.MainBlogPage>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchAPI('/articles?status=published');
  return { props: { posts } };
};
export default Blog;
