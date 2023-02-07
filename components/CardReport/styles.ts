import styled from "styled-components";
import { Roboto, Nunito_Sans, Rubik } from "@next/font/google";

const nunito_sans = Nunito_Sans({ weight: ["400"], subsets: ["latin"] });

export const Container = styled.aside`
  padding: 2rem;
  border: 1px solid #e2e2e2;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.22);
  border-radius: 9px;
  background: #ffffff;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .div-profile {
    display: flex;
    width: 100%;
    gap: 1rem;
    align-items: center;
    h6 {
      font-family: ${nunito_sans.style.fontFamily};
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #262626;
      max-width: 260px;
      margin: 0;
    }
  }
  p {
    font-family: ${nunito_sans.style.fontFamily};
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    letter-spacing: 0.03em;
    color: #646464;
    text-align: justify;
  }
`;