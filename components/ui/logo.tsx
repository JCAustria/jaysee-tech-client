import { fetchMedia } from 'lib/media';
import styled from '@emotion/styled';
import { IMGProps } from 'types/props';

const Logo: React.FC<IMGProps> = ({ image }, { className }) => {
  const imageUrl = fetchMedia(image);

  return (
    <Styled.Image
      src={imageUrl}
      alt={image.alternativeText || image.name}
      className={className}
    />
  );
};

class Styled {
  static Image = styled.img`
    width: 55px;
    height: 55px;
  `;
}
export default Logo;
