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
              return (
                <Link as={`/posts/${post?.slug}`} href="/posts/[id]">
                  <Anchor whileHover={{ scale: 1.05 }}>
                    <Card article={post} key={post.slug}>
                      <CoverIMG src={fetchMedia(post.image)} />
                      <ContentTop>
                        <ContentCaption>
                          <Heading>{post.title}</Heading>
                        </ContentCaption>
                      </ContentTop>
                      <ContentBottom>
                        <ContentExcerpt>
                          {post.excerpt} Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Id amet suscipit, est sed eveniet
                          nesciunt earum! Sint est, soluta placeat officiis
                          similique rerum enim, et eum, eius quos amet animi!
                        </ContentExcerpt>
                      </ContentBottom>
                    </Card>
                  </Anchor>
                </Link>
              );
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
