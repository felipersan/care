import styled from 'styled-components'

import { Roboto, Nunito_Sans } from '@next/font/google'
const roboto = Roboto({ weight: ['500'], subsets: ['latin'] })
const nunito_sans = Nunito_Sans({ weight: ['400'], subsets: ['latin'] })

export const Container = styled.div`
  height: 261px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 9px;
  padding: 10px;
  .titleQualityItem {
    text-align: center;
    font-family: ${roboto?.style.fontFamily};
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
  }
  .descriptionQuality {
    text-align: center;
    font-family: ${nunito_sans?.style?.fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
    text-align: center;

    color: #bfbfbf;
  }
`
