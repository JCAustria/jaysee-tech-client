import NavSection from '@/layouts/nav';
import SC from 'components/card.sc';
import { fetchAPI } from 'lib/api';
import { fetchMedia } from 'lib/media';
import { GetStaticProps } from 'next';
type BlogProps = {
  posts: PostProps[];
};

type PostProps = {
  slug: string | number | null | undefined;
  image: { url: string };
  title: string;
};

const Blog: React.FC<BlogProps> = ({ posts }) => {
  return (
    <>
      <NavSection />
      <SC.Wrapper>
        {posts.map((post: PostProps) => {
          return (
            <SC.Card key={post.slug}>
              <SC.CoverIMG src={fetchMedia(post.image)} />
              <SC.Heading>{post.title}</SC.Heading>
            </SC.Card>
          );
        })}
      </SC.Wrapper>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await fetchAPI('/articles?status=published');
  return { props: { posts } };
};
export default Blog;
