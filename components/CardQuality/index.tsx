import { FC } from "react";
import * as S from './styles'

interface IProps {
  info: {
    icon: JSX.Element;
    title: string;
    text: string;
  };
}

export const CardQuality: FC<IProps> = ({ info }) => {
  return (
    <S.Container>
      <span>{info.icon}</span>
      <h5>{info.title}</h5>
      <p>{info.text}</p>
    </S.Container>
  );
};