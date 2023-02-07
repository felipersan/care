import { ReactNode } from 'react'
import * as S from './styles'

interface IQualityProps {
  icon: ReactNode
  title: string
  description: string
}

export default function QualityItem({
  icon,
  description,
  title
}: IQualityProps) {
  return (
    <S.Container>
      {icon}
      <h3 className="titleQualityItem">{title}</h3>
      <p className="descriptionQuality">{description}</p>
    </S.Container>
  )
}
