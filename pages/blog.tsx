import Card from 'components/ui/card';
import Nav from 'components/ui/nav';
import { fetchAPI } from 'lib/api';
import { GetStaticProps } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import BackButton from 'components/ui/back-btn';
import { fetchMedia } from 'lib/media';
import Link from 'next/link';
import { motion } from 'framer-motion';
type BlogProps = {
  posts?: PostProps[];
  post: {
    slug: string | number | null | undefined;
    image: { url: string };
    title: string;
    description: string;
  };
};

export type PostProps = {
  slug: string | number | null | undefined;
  image: { url: string };
  title: string;
  description: string;
};

const Blog: React.FC<BlogProps> = ({ posts }) => {
  const BlogCard: React.FC<BlogProps> = ({ post }) => (
    <Link as={`/posts/${post?.slug}`} href="/posts/[id]" key={post.slug}>
      <Anchor whileHover={{ scale: 1.05 }} key={post.slug}>
        <Card article={post} key={post.slug}>
          <CoverIMG src={fetchMedia(post.image)} key={post.slug} />
          <ContentTop key={post.slug}>
            <ContentCaption key={post.slug}>
              <Heading key={post.slug}>{post.title}</Heading>
            </ContentCaption>
          </ContentTop>
          <ContentBottom key={post.slug}>
            <ContentExcerpt key={post.slug}>{post.description}</ContentExcerpt>
          </ContentBottom>
        </Card>
      </Anchor>
    </Link>
  );

  return (
    <>
      <Nav />
      <SC.MainBlogPage>
        <SC.Container>
          <BackButton />
          <SC.GridContainer>
            {posts?.map((post: PostProps) => {
              return <BlogCard post={post} />;
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
  static PaddingOne = css`
    padding: 1rem;
  `;
  static MainBlogPage = styled.main`
    color: rgba(30, 59, 86, 1);
    background-color: rgba(230, 171, 35, 1);
    overflow: visible;
  `;
  static Container = styled.div`
    ${SC.PaddingOne}
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
const CoverIMG = styled.img`
  display: block;
  width: 100%;
  padding-bottom: 2rem;
  margin: 0 auto;
  border-radius: 20px;
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.25));
`;
const ContentExcerpt = styled.p`
  padding: 1rem;
`;
const ContentCaption = styled.figcaption`
  display: inline-block;
`;
const ContentTop = styled.figure`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0 0 0;
`;
const ContentBottom = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: auto;
`;
const Heading = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: clamp(0.125rem, 4vw, 1.2rem);
  text-align: center;
  text-transform: capitalize;
  text-decoration: none;
  padding: 0 0 1.25rem 0;
`;

const Anchor = styled(motion.a)`
  text-decoration: none;
  cursor: pointer;
  width: fit-content;
`;
