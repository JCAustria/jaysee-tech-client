import { PostProps } from 'pages/blog';
import SC from 'components/card.sc';
import { fetchMedia } from 'lib/media';
import Link from 'next/link';

type CardProps = {
  article: PostProps;
};
const Card: React.FC<CardProps> = ({ article }) => {
  return (
    <SC.Card key={article.slug}>
      <SC.CardTop>
        <SC.CoverIMG src={fetchMedia(article.image)} />
        <SC.Caption>
          <SC.Heading>{article.title}</SC.Heading>
        </SC.Caption>
      </SC.CardTop>
      <SC.CardBottom>
        <Link as={`/posts/${article.slug}`} href="/posts/[id]">
          <SC.Anchor>Link </SC.Anchor>
        </Link>
      </SC.CardBottom>
    </SC.Card>
  );
};

export default Card;
