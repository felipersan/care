import styled from 'styled-components'
import { Nunito_Sans } from '@next/font/google'

const nunito_sans = Nunito_Sans({ weight: ['400'], subsets: ['latin'] })

interface IProps {
  color?: string;
}

export const Container = styled.div<IProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  .listItem {
    font-family: ${nunito_sans.style.fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 13.75px;
    line-height: 19px;
    color: ${({ color }) => color ? color : 'white'};
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;
