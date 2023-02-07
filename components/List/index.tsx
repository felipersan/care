import Image from 'next/image'
import * as S from './styles'

interface IListProps {
  data: Array<string>
}

import check from '../../public/images/check.png'

export default function List({ data }: IListProps) {
  return (
    <S.Container>
      {data?.map((row: string, key: number) => (
        <span className="listItem">
          <Image alt="icone de checagem" src={check} width={10} height={10} />
          {row}
        </span>
      ))}
    </S.Container>
  )
}
