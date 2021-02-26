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

// This is terrible, I hate this so much
const Post = ({ article }: any) => {
  const imageUrl = fetchMedia(article.image);
  return (
    <>
      <Head>
        <meta name="description" />
      </Head>
      <Nav />
      <PostSC.Container>
        <PostSC.InnerContainer>
          <PostSC.Content>
            <BackButton />
            <PostSC.ContentContainer>
              <PostSC.ImageContainer>
                <img src={imageUrl} alt={article.name} />
              </PostSC.ImageContainer>
              <ReactMarkdown source={article.content} escapeHtml={false} />
              <hr />
              <PostSC.AuthorContainer>
                <PostSC.AuthorPicture>
                  {article.author.picture && (
                    <Image image={article.author.picture} />
                  )}
                </PostSC.AuthorPicture>
                <PostSC.AuthorInfo>
                  <p>By {article.author.name}</p>
                  <p>
                    <Moment format="MMM Do YYYY">{article.publishedAt}</Moment>
                  </p>
                </PostSC.AuthorInfo>
              </PostSC.AuthorContainer>
            </PostSC.ContentContainer>
          </PostSC.Content>
        </PostSC.InnerContainer>
      </PostSC.Container>
    </>
  );
};
type ArticleProps = {
  article: string[];
  slug: string[];
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

class PostSC {
  static Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
  static InnerContainer = styled.div`
    font-family: 'Raleway', sans-serif;
    padding: 0rem 1rem 8rem 1rem;
    background-color: rgba(248, 249, 255, 1);
    @media screen and (min-width: 60em) {
      padding: 1rem 7rem;
      margin: 0 auto;
    }
  `;
  static ImageContainer = styled.div`
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
  static AuthorContainer = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    @media screen and (min-width: 60em) {
      flex-direction: row;
    }
  `;
  static AuthorPicture = styled.div`
    padding: 1rem;
  `;
  static AuthorInfo = styled.div`
    padding-left: 1rem;
  `;
  static ContentContainer = styled.div`
    background: linear-gradient(
      180deg,
      rgba(223, 227, 255, 1) 0%,
      rgba(248, 249, 255, 1) 15%
    );
    padding: 0;
    border-radius: 5px;
  `;
  static Content = styled.article`
    h1 {
      line-height: 1;
      font-size: 2rem;
      text-align: center;
      @media screen and (min-width: 60em) {
        font-size: 6rem;
        padding: 0 20rem;
      }
    }
    p {
      font-size: 1rem;
      letter-spacing: 0.5pt;
      line-height: 1.5;
      padding: 0.96rem;
      @media screen and (min-width: 60em) {
        padding: 0 18rem;
        line-height: 2.5;
        font-size: 1.6rem;
      }
    }
    iframe {
      padding: 0 1.2rem;
      max-width: 100%;
      @media screen and (min-width: 60em) {
        padding: 0rem;
      }
    }
    @media screen and (min-width: 60em) {
      padding: 0 4rem;
      iframe {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
      }
    }
  `;
}
