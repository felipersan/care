import { FC } from "react";
import { ProfileIcon, StarIcon } from "../../public/icons";
import * as S from "./styles";

interface IProps {
  info: {
    name: string;
    text: string;
  };
}

const starsList = [1,2,3,4,5]

export const CardReport: FC<IProps> = ({ info }) => {
  return (
    <S.Container>
      <div className="div-profile">
        <ProfileIcon />
        <h6>{info.name}</h6>
      </div>
      <span>
        {starsList.map((element) => {
          return <StarIcon key={"star " + element} />;
        })}
      </span>
      <p>{info.text}</p>
    </S.Container>
  );
};
