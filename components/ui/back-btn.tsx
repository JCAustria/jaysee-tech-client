import { useRouter } from 'next/router';
import styled from 'styled-components';
import { BiArrowBack } from '@react-icons/all-files/bi/BiArrowBack';

const BackButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <BackBTN.Container>
      <BackBTN.BackArrow size="16px" />
      <BackBTN.Button onClick={handleClick}>Back</BackBTN.Button>
    </BackBTN.Container>
  );
};

export default BackButton;

class BackBTN {
  static BackArrow = styled(BiArrowBack)`
    transition: transform ease 0.3s;
  `;
  static Container = styled.span`
    display: inline-block;
    align-items: center;
    padding: 1rem 0;
    color: rgba(30, 59, 81, 1);
    :hover {
      ${BackBTN.BackArrow} {
        transform: translateX(-25%);
      }
    }
  `;
  static Button = styled.a`
    cursor: pointer;
    padding-left: 0.25rem;
    font-size: clamp(0.5rem, 4vw, 1.125rem);
  `;
}
