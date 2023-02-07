import Image from 'next/image'
import * as S from './styles'

import wppIcon from '../../public/images/wppIcon.png'

interface IPropsButton {
  title?: string
  onClick: () => void
}

export default function ButtonWpp({ title, onClick }: IPropsButton) {
  return (
    <S.Container onClick={onClick}>
      <Image alt="ícone do WhatsApp" src={wppIcon} height={20} width={20} />
      <p>{title}</p>
    </S.Container>
  );
}
