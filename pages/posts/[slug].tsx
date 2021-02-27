import Head from 'next/head';
import Nav from 'components/ui/nav';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchAPI } from 'lib/api';
import ReactMarkdown from 'react-markdown';
import styled from '@emotion/styled';
import { fetchMedia } from 'lib/media';
import Image from 'components/ui/image';
import Moment from 'react-moment';
import BackButton from 'components/ui/back-btn';
import { ArticleProps } from 'types/article-props';

const Post = ({ article }: any) => {
  const imageUrl = fetchMedia(article.image);

  return (
    <>
      <Head>
        <meta name="description" />
      </Head>
      <Nav />
      <Container>
        <InnerContainer>
          <Content>
            <BackButton />
            <ContentContainer>
              <ImageContainer>
                <img src={imageUrl} alt={article.name} />
              </ImageContainer>
              <MarkdownStyled>
                <ReactMarkdown source={article.content} escapeHtml={false} />
                <hr />
                <AuthorContainerStyled article={article} />
              </MarkdownStyled>
            </ContentContainer>
          </Content>
        </InnerContainer>
      </Container>
    </>
  );
};

const AuthorContainer = ({ article }: any) => {
  return (
    <>
      <AuthorPicture>
        {article.author.picture && <Image image={article.author.picture} />}
      </AuthorPicture>
      <AuthorInfo>
        <p>By {article.author.name}</p>
        <p>
          <Moment format="MMM Do YYYY">{article.publishedAt}</Moment>
        </p>
      </AuthorInfo>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await fetchAPI('/articles');
  const paths = posts.map((article: ArticleProps) => ({
    params: {
      slug: article.slug,
    },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const articles = await fetchAPI(
    `/articles?slug=${params?.slug}&status=published`
  );

  return { props: { article: articles[0] }, revalidate: 1 };
};

export default Post;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const InnerContainer = styled.div`
  font-family: 'Raleway', sans-serif;
  padding: 0rem 1rem 8rem 1rem;
  background-color: rgba(248, 249, 255, 1);
  @media screen and (min-width: 60em) {
    padding: 1rem 7rem;
    margin: 0 auto;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    margin: 0 auto;
    padding: 4rem 1rem 0rem 1rem;
    max-width: 100%;
    height: auto;
  }
`;
const AuthorContainerStyled = styled(AuthorContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media screen and (min-width: 60em) {
    flex-direction: row;
    padding: 0 20rem;
    margin: 0 auto;
  }
`;
const AuthorPicture = styled.div`
  width: fit-content;
  padding: 1rem;
  margin: 0 auto;
`;
const AuthorInfo = styled.div`
  width: fit-content;
  margin: 0 auto;
  @media screen and (min-width: 60em) {
    margin: auto;
  }
`;
const ContentContainer = styled.div`
  background: linear-gradient(
    180deg,
    rgba(223, 227, 255, 1) 0%,
    rgba(248, 249, 255, 1) 15%
  );
  padding: 0;
  border-radius: 5px;
`;

const MarkdownStyled = styled.div`
  padding: 0;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }
  & > h1 {
    font-size: 1.2rem;
    @media screen and (min-width: 60em) {
      font-size: 4rem;
    }
  }

  & > h2 {
    font-size: 1.1rem;
    @media screen and (min-width: 60em) {
      font-size: 3.5rem;
    }
  }
  ul,
  li {
    padding: 1rem 0;
    @media screen and (min-width: 60em) {
      font-size: 1.4rem;
    }
    ::marker {
      font-size: 1.2rem;
      @media screen and (min-width: 60em) {
        font-size: 1.4rem;
      }
    }
  }
  & > p {
    font-size: 0.95rem;
    padding: 0 1.2rem;
    line-height: 2;
    @media screen and (min-width: 60em) {
      font-size: 1.4rem;
    }
  }
  @media screen and (min-width: 60em) {
    padding: 0 25rem;
  }
`;
const Content = styled.article``;
