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
      <CardSC.Container whileHover={{ scale: 1.1 }}>
        <Link as={`/posts/${article.slug}`} href="/posts/[id]">
          <CardSC.Anchor whileHover={{ scale: 1.1 }}>
            <CardSC.Card key={article.slug}>
              <CardSC.CoverIMG src={fetchMedia(article.image)} />
              <CardSC.CardTop>
                <CardSC.Caption>
                  <CardSC.Heading>{article.title}</CardSC.Heading>
                </CardSC.Caption>
              </CardSC.CardTop>
              <CardSC.CardBottom>
                <CardSC.CardExcerpt>
                  {article.excerpt} Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Id amet suscipit, est sed eveniet nesciunt
                  earum! Sint est, soluta placeat officiis similique rerum enim,
                  et eum, eius quos amet animi!
                </CardSC.CardExcerpt>
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
  static Container = styled(motion.div)`
    @media screen and (min-width: 60em) {
      padding: 0.75rem;
    }
  `;
  static CoverIMG = styled.img`
    display: block;
    width: 100%;
    padding-bottom: 2rem;
    margin: 0 auto;
    border-radius: 20px;
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.25));
  `;
  static Card = styled.article`
    display: grid;
    max-width: fit-content;
    margin: 0 auto;
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: 1fr;
    color: #1e3b56;
    background: linear-gradient(
      145deg,
      rgba(248, 249, 255, 1) 0%,
      rgba(215, 217, 231, 1) 100%
    );
    border-radius: 20px;
    filter: drop-shadow(0px 4px 16px rgba(0, 0, 0, 0.25));
  `;
  static CardExcerpt = styled.p`
    padding: 1rem;
  `;
  static Caption = styled.figcaption`
    display: inline-block;
  `;
  static CardTop = styled.figure`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 0 0;
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
    padding: 0 0 1.25rem 0;
  `;
  static Anchor = styled(motion.a)`
    text-decoration: none;
    cursor: pointer;
    width: fit-content;
  `;
}
