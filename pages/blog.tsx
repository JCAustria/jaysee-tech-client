import SC from 'components/styled/blog.sc';
import Card from 'components/ui/card';
import Nav from 'components/ui/nav';
import { fetchAPI } from 'lib/api';
import { GetStaticProps } from 'next';
import styled from 'styled-components';

type BlogProps = {
  posts: PostProps[];
};

export type PostProps = {
  slug: string | number | null | undefined;
  image: { url: string };
  title: string;
  excerpt: string;
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

class SC {
  static MainBlogPage = styled.main`
    color: rgba(30, 59, 86, 1);
    overflow: visible;
  `;
  static Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    grid-gap: 2rem;
    margin: 0 0 0 0;
    @media screen and (min-width: 60em) {
      margin: 2rem auto;
      grid-template-columns: repeat(2, 1fr);
    }
  `;
}
