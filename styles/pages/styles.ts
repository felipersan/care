import styled from 'styled-components'

import { Roboto, Nunito_Sans, Rubik, Ibarra_Real_Nova } from '@next/font/google'
const roboto = Roboto({ weight: ['100', '500', '900'], subsets: ['latin'] })
const nunito_sans = Nunito_Sans({ weight: ['400'], subsets: ['latin'] })
const rubik = Rubik({ weight: ["400"], subsets: ["latin"] });
const ibarra = Ibarra_Real_Nova({ weight: ["400"], subsets: ["latin"] });

export const Container = styled.main`
  background-color: white;
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
  .qualitiesWrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 90px 109px;
    grid-gap: 20px;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 600px) {
      padding: 90px 30px;
    }
    @media (max-width: 480px) {
      grid-template-columns: 1fr ;

    }
  }
`

export const ThirdSection = styled.section`
  display: flex;
  gap: 5rem;
  justify-content: center;
  flex-wrap: wrap-reverse;
  background-color: rgba(156, 196, 228, 0.3);
  padding: 5rem 2rem;
  .image-third-section {
    max-width: 100%;
    object-fit: contain;
    @media (max-width: 512px) {
      height: 100%;
    }
  }
  .text-third-section {
    display: flex;
    flex-direction: column;
    /* gap: 1rem; */
    max-width: 580px;
    h3 {
      font-family: ${nunito_sans.style.fontFamily};
      color: rgba(242, 108, 79, 1);
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
    }
    h2 {
      font-family: ${nunito_sans.style.fontFamily};
      font-style: normal;
      font-weight: 700;
      font-size: 24px;
      color: #404041;
    }
  }
  .checklist-container {
    padding-top: 2rem;
    padding-bottom: 3rem;
  }
`;

export const FourthSection = styled.section`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  h2 {
    font-family: ${nunito_sans.style.fontFamily};
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    color: #262626;
    text-align: center;
    span {
      color: #3a89c9;
    }
  }
  .p-fourth-section {
    font-family: ${nunito_sans.style.fontFamily};
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #000000;
    max-width: 945px;
    margin-bottom: 4rem;
  }
`;

export const FiveSection = styled.section`
  padding: 5rem 2rem;
  background-color: rgba(156, 196, 228, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: ${nunito_sans.style.fontFamily};
    font-style: normal;
    font-weight: 800;
    font-size: 22px;
    color: #3a89c9;
  }
  h4 {
    font-family: ${rubik.style.fontFamily};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    color: #0b132a;
  }
  .flex-cards{
    display: flex;
    gap: 2rem;
    align-items: flex-start;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

export const SixSection = styled.section`
  padding: 5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: ${rubik.style.fontFamily};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    color: #1c1829;
    margin-bottom: 5rem;
  }
  .six-section{
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    height: max-content;
    justify-content: space-evenly;
  }
`;

export const SevenSection = styled.section`
  padding: 5rem 2rem;
  background-color: rgba(156, 196, 228, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: ${nunito_sans.style.fontFamily};
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    text-align: center;
    color: #262626;
  }
  span {
    font-family: ${nunito_sans.style.fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    text-align: center;
    color: #979797;
    max-width: 665px;
    margin-bottom: 3rem;
  }
  a {
    text-decoration-line: underline;
    color: #1d57ec;
  }
`;

export const DoubtsContainer = styled.article`
  max-width: 880px;
  h3 {
    font-family: ${ibarra.style.fontFamily};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    letter-spacing: 0.03em;
    color: #000000;
  }
  p {
    font-family: ${nunito_sans.style.fontFamily};
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 0.03em;
    color: #646464;
  }
`;