import styled from 'styled-components';
import {
  StyledContainerProps,
  StyledGridContainerProps,
  StyledFontProps,
} from './styled-skills-props';

class SC {
  static SkillsContent = styled.section`
    background-color: rgba(230, 171, 35, 1);
  `;
  static HeadingBig = styled.h1`
    font-family: 'Roboto Mono', monospace;
    font-size: clamp(36px, 4vw, 96px);
    color: rgba(30, 59, 86, 1);
    margin: 0;
  `;
  static Container = styled.div<StyledContainerProps>`
    width: ${({ widthVal }) => widthVal};
    padding: ${({ padding }) => padding};
    margin: ${({ margin }) => margin};
  `;
  static GridContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ gridCols }: StyledGridContainerProps) =>
      gridCols};
  `;
  static IconContainer = styled.div`
    display: inline-block;
    width: fit-content;
    height: auto;
    margin: 0 1.8rem;
    padding: 0;
  `;
  static TechSkillsCard = styled.div`
    display: inline-block;
    margin: 5rem 0;
    background-color: rgba(248, 249, 255, 1);
    width: 430px;
    height: 525px;
    border-color: rgba(30, 59, 86, 1);
    border-radius: 20px;
    border-style: solid;
    border-width: 2px;
    filter: drop-shadow(-5px 13px 21px rgba(0, 0, 0, 0.25));
  `;
  static Paragraph = styled.p`
    color: rgba(30, 59, 86, 1);
    font-family: 'Roboto Mono', monospace;
    font-weight: ${({ fontWeight }: StyledFontProps) => fontWeight};
    font-size: ${({
      fontSizeMin,
      fontSizeInitial,
      fontSizeMax,
    }: StyledFontProps) =>
      `clamp(${fontSizeMin}, ${fontSizeInitial}, ${fontSizeMax});`};
  `;
}

export default SC;
