import styled from "styled-components";
import { Roboto, Nunito_Sans, Rubik } from "@next/font/google";

const rubik = Rubik({ weight: ["400"], subsets: ["latin"] });
const nunito_sans = Nunito_Sans({ weight: ["400"], subsets: ["latin"] });

export const Container = styled.aside`
  max-width: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  span {
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #3a89c9;
    width: 4rem;
    height: 4rem;
    svg {
      width: 2rem;
    }
  }
  h5 {
    font-family: ${rubik.style.fontFamily};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    letter-spacing: 0.03em;
    color: #616161;
    text-align: center;
  }
  p {
    font-family: ${nunito_sans.style.fontFamily};
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    text-align: center;
    letter-spacing: 0.03em;
    color: #949494;
    margin-top: -1rem;
  }
`;