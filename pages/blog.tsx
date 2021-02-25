import Card from 'components/ui/card';
import Nav from 'components/ui/nav';
import { fetchAPI } from 'lib/api';
import { GetStaticProps } from 'next';
import styled, { css } from 'styled-components';
import BackButton from 'components/ui/back-btn';

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
        <SC.Container>
          <BackButton />
          <SC.GridContainer>
            {posts.map((post: PostProps) => {
              return <Card article={post} key={post.slug} />;
            })}
          </SC.GridContainer>
        </SC.Container>
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
    background-color: rgba(230, 171, 35, 1);
    overflow: visible;
  `;
  static Container = styled.div`
    padding: 2rem;
    @media screen and (min-width: 60em) {
      padding: 4rem 20rem 20rem 20rem;
    }
  `;
  static GridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    place-items: center;
    grid-gap: 4em;
    /* padding: 2rem 15rem; */
    @media screen and (min-width: 60em) {
      grid-template-columns: repeat(3, 1fr);
    }
  `;
}
