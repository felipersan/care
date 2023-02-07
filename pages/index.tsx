import Image from 'next/image'
import * as S from '../styles/pages/styles'

//import images
import logo from '../public/images/logo.png'
import bgStars from '../public/images/bgStars.png'
import business from '../public/images/business.png'
import List from '../components/List'
import ButtonWpp from '../components/ButtonWpp'

export default function Home() {
  return (
    <S.Container>
      <header className="headerHomePage">
        <Image
          src={logo}
          alt={'logotipo Care: contabilidade acessível e responsável'}
          width={62}
          height={50}
          quality={100}
        />
        <p className="textHeader">
          CARE - CONTABILIDADE{' '}
          <strong className="strongOrange">ACESSÍVEL</strong> E{' '}
          <strong className="strongOrange">RESPONSÁVEL</strong>
        </p>
      </header>
      <section className="mainSection">
        <Image
          src={bgStars}
          alt="fundo de imagem estrelado"
          fill
          objectFit="cover"
          className="bgStars"
        />
        <div className="leftSide">
          <h1 className="titlePage">Contabilidade Acessível e Responsável</h1>
          <div className="descriptionPage">
            No nosso escritório, sua contabilidade estará em boas mãos.
            Oferecemos{' '}
            <strong className="strongOrange">
              confiabilidade, competência
            </strong>{' '}
            e um serviço <strong className="strongOrange">personalizado</strong>{' '}
            para garantir a tranquilidade e segurança fiscal de nossos clientes.
          </div>
          <List
            data={[
              'Abertura de empresa',
              'Escrituração contábil e fiscal',
              'Consultoria Tributária',
              'Simples Nacional',
              'MEI',
              'Emissão de nota fiscal'
            ]}
          />
          <div className="buttonWrapper">
            <ButtonWpp title="CONVERSAR COM UM ATENDENTE" />
            <p className="email">email@email.com</p>
          </div>
        </div>
        <div className="rigthSide">
          <Image
            alt="Imagem de um celular com cartões de crédito em volta remetendo à investimentos e rentabilidade"
            src={business}
            fill
            className="imageBusiness"
          />
        </div>
      </section>
    </S.Container>
  )
}
