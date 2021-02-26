import { PostProps } from 'pages/blog';
import styled from '@emotion/styled';
import { fetchMedia } from 'lib/media';
import { motion } from 'framer-motion';
type CardProps = {
  article?: PostProps;
};
const Card: React.FC<CardProps> = ({ article, children }) => {
  return (
    <>
      <CardBG
        key={article?.slug}
        whileHover={{ scale: 1.04, type: 'spring' }}
        whileTap={{ scale: 1.1, type: 'spring' }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </CardBG>
    </>
  );
};

export default Card;

const CardBG = styled(motion.div)`
  display: grid;
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
