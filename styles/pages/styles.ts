import styled from 'styled-components'

import { Roboto, Nunito_Sans } from '@next/font/google'
const roboto = Roboto({ weight: ['100', '500', '900'], subsets: ['latin'] })
const nunito_sans = Nunito_Sans({ weight: ['400'], subsets: ['latin'] })

export const Container = styled.main`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  .headerHomePage {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 106px;
    .textHeader {
      font-family: ${roboto?.style.fontFamily};
      font-style: normal;
      font-weight: 900;
      font-size: 24px;
      line-height: 56px;
      color: #3a89c9;
      .strongOrange {
        color: #f47458;
      }
    }
    @media (max-width: 880px) {
      padding: 0 30px;
      .textHeader {
        font-size: 16px;
      }
    }
    @media (max-width: 550px) {
      display: none;
    }
  }
  .mainSection {
    padding: 0 106px;
    width: 100%;
    height: calc(100vh - 60px);
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(
      92.89deg,
      #1b325f 33.65%,
      rgba(156, 196, 228, 0.93) 94.41%
    );
    .leftSide {
      width: 50%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      z-index: 3;
      .titlePage {
        font-family: ${roboto.style.fontFamily};
        font-style: normal;
        font-weight: 500;
        font-size: 36px;
        line-height: 36px;
        color: #fff;
        margin: 0;
      }
      .descriptionPage {
        font-family: ${nunito_sans.style.fontFamily};
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: #e1e1e1;
        .strongOrange {
          font-weight: 600;
          color: #f26c4f;
        }
      }
      .buttonWrapper {
        margin-top: 40px;
        p {
          font-family: ${nunito_sans.style.fontFamily};
          font-style: normal;
          font-weight: 400;
          font-size: 13.75px;
          line-height: 19px;
          color: #ffffff;
        }
      }
    }
    .rigthSide {
      width: 50%;
      height: 100%;
      position: relative;
      .imageBusiness {
        object-fit: contain;
      }
    }
    @media (max-width: 1090px) {
      flex-direction: column;
      padding-top: 50px;
      height: 100%;
      gap: 20px;
      .leftSide {
        width: 100%;
      }
      .rigthSide {
        width: 100%;
        min-height: 300px;
      }
    }

    @media (max-width: 600px) {
      padding: 30px 20px;
    }
  }
`
