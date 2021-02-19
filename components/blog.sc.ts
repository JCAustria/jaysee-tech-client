import styled from 'styled-components';
import { motion } from 'framer-motion';
class SC {
  static MainBlogPage = styled(motion.main)`
  `;
  static Wrapper = styled(motion.section)`
    display:grid;
    grid-template-columns: repeat(1,1fr);
    place-content:center;
    grid-gap: 2rem;
    margin: 1rem 2rem;
  `;
}
export default SC;
