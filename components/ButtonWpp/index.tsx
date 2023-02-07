import Image from 'next/image'
import * as S from './styles'

import wppIcon from '../../public/images/wppIcon.png'

interface IPropsButton {
  title?: string
}

export default function ButtonWpp({ title }: IPropsButton) {
  return (
    <S.Container>
      <Image alt="ícone do WhatsApp" src={wppIcon} height={20} width={20} />
      <p>{title}</p>
    </S.Container>
  )
}
