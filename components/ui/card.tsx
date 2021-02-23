import { PostProps } from 'pages/blog';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { fetchMedia } from 'lib/media';
import Link from 'next/link';
type CardProps = {
  article: PostProps;
};
const Card: React.FC<CardProps> = ({ article }) => {
  return (
    <>
      <CardSC.Container>
        <Link as={`/posts/${article.slug}`} href="/posts/[id]">
          <CardSC.Anchor whileHover={{ scale: 1.1 }}>
            <CardSC.Card key={article.slug}>
              <CardSC.CardTop>
                <CardSC.Caption>
                  <CardSC.Heading>{article.title}</CardSC.Heading>
                </CardSC.Caption>
                <CardSC.CoverIMG src={fetchMedia(article.image)} />
              </CardSC.CardTop>
              <CardSC.CardBottom>
                <p>{article.excerpt}</p>
              </CardSC.CardBottom>
            </CardSC.Card>
          </CardSC.Anchor>
        </Link>
      </CardSC.Container>
    </>
  );
};

export default Card;

class CardSC {
  static Container = styled.div`
    width: 280px;

    @media screen and (min-width: 60em) {
      width: 1024px;
    }
  `;
  static CoverIMG = styled.img`
    display: block;
    width: 90%;
    padding-bottom: 2rem;
    margin: 0 auto;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
  `;
  static Card = styled.article`
    display: grid;
    max-width: 80%;
    padding: 1rem;
    margin: 0 auto;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: 1fr;
    color: #1e3b56;
    background-color: #f8f9ff;
    border-radius: 20px;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
  `;
  static Caption = styled.figcaption`
    display: inline-block;
  `;
  static CardTop = styled.figure`
    display: flex;
    flex-direction: column;
    margin: 0;
  `;
  static CardBottom = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: auto;
  `;
  static Heading = styled.h1`
    font-family: 'Raleway', sans-serif;
    font-size: clamp(0.125rem, 4vw, 1.2rem);
    text-align: center;
    text-transform: capitalize;
    text-decoration: none;
  `;
  static Anchor = styled(motion.a)`
    text-decoration: none;
    cursor: pointer;
    width: fit-content;
  `;
}
