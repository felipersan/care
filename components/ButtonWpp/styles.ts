import styled from 'styled-components'

import { Roboto, Nunito_Sans } from '@next/font/google'
const roboto = Roboto({ weight: ['100', '500', '900'], subsets: ['latin'] })

export const Container = styled.button`
  border: none;
  background: linear-gradient(
    96.97deg,
    #25d366 7.82%,
    rgba(37, 211, 102, 0.73) 103.98%
  );
  border-radius: 70px;
  height: 42px;
  padding: 0 20px;
  width: min-content;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  z-index: 3;
  p {
    font-family: ${roboto.style.fontFamily};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-transform: capitalize;
    color: #ffffff;
    white-space: nowrap;
  }
`
