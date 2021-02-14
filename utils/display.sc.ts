import styled from 'styled-components';

type GridProps = {
  cols: number
  rows: number
}

export const Grid = styled('div')`
  display:grid;
  grid-template-columns: ${({ cols }: GridProps) => `repeat(${cols}, 1fr)`};
  grid-template-rows: ${({ rows }: GridProps) => `repeat(${rows}, 1fr)`} ;
`
