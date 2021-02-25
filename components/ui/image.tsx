import { fetchMedia } from 'lib/media';
import styled from 'styled-components';
import { IMGProps } from 'types/props';

const Image: React.FC<IMGProps> = ({ image }) => {
  const imageUrl = fetchMedia(image);

  return (
    <Styled.Image src={imageUrl} alt={image.alternativeText || image.name} />
  );
};

class Styled {
  static Image = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
  `;
}
export default Image;
