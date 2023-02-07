import Image from 'next/image'
import * as S from '../styles/pages/styles'

//import images
import logo from '../public/images/logo.png'
import bgStars from '../public/images/bgStars.png'
import business from '../public/images/business.png'
import alvo from "../public/images/business.png";
import List from '../components/List'
import ButtonWpp from '../components/ButtonWpp'
import QualityItem from '../components/QualityItem'
import {
  HandleIcon,
  MedalIcon,
  TaxIcon,
  TrophyIcon,
  MoneyIcon,
} from "../public/icons";
import { CardQuality } from '../components/CardQuality'

const cardList = [
  {
    icon: <HandleIcon color="white" size={30} />,
    title: "Atendimento Humanizado",
    text: "Oferecemos um atendimento personalizado e humanizado, priorizando sempre as necessidades e expectativas de nossos clientes.",
  },
  {
    icon: <MedalIcon color="white" size={30} />,
    title: "Qualidade Comprovada",
    text: "Com anos de experiência e uma equipe altamente qualificada, garantimos a qualidade e a eficiência de nossos serviços de contabilidade, atendendo às exigências do mercado e superando as expectativas de nossos clientes.",
  },
  {
    icon: <MoneyIcon color="white" size={30} />,
    title: "Melhores Valores",
    text: "Nós acreditamos que a excelência financeira não precisa ser cara. Oferecemos os melhores valores do mercado, sem comprometer a qualidade e eficiência de nossos serviços.",
  },
];

export default function Home() {
  return (
    <S.Container>
      <header className="headerHomePage">
        <Image
          src={logo}
          alt={"logotipo Care: contabilidade acessível e responsável"}
          width={62}
          height={50}
          quality={100}
        />
        <p className="textHeader">
          CARE - CONTABILIDADE{" "}
          <strong className="strongOrange">ACESSÍVEL</strong> E{" "}
          <strong className="strongOrange">RESPONSÁVEL</strong>
        </p>
      </header>

      {/* first section */}
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
            Oferecemos{" "}
            <strong className="strongOrange">
              confiabilidade, competência
            </strong>{" "}
            e um serviço <strong className="strongOrange">personalizado</strong>{" "}
            para garantir a tranquilidade e segurança fiscal de nossos clientes.
          </div>
          <List
            data={[
              "Abertura de empresa",
              "Escrituração contábil e fiscal",
              "Consultoria Tributária",
              "Simples Nacional",
              "MEI",
              "Emissão de nota fiscal",
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

      <section className="qualitiesWrapper">
        <QualityItem
          description="Oferecemos serviço de alta qualidade e profissionalismo. Garantimos soluções precisas e eficientes para todas as suas necessidades contábeis."
          title="Somos Profissionais"
          icon={<MedalIcon />}
        />
        <QualityItem
          description="Com anos de experiência nós entendemos qual a melhor solução para os empresários contratados como PJ. Não precisa se preocupar, vamos cuidar muito bem de você."
          title="Especialistas em contrato PJ"
          icon={<TrophyIcon />}
        />
        <QualityItem
          description="Nós acreditamos que a excelência financeira não precisa ser cara. Oferecemos os melhores valores do mercado, sem comprometer a qualidade e eficiência de nossos serviços."
          title="Sem taxas abusivas"
          icon={<TaxIcon />}
        />
        <QualityItem
          description="Oferecemos um atendimento personalizado e humanizado, priorizando sempre as necessidades e expectativas de nossos clientes."
          title="Atendimento Humanizado"
          icon={<HandleIcon />}
        />
      </section>

      <S.ThirdSection>
        <Image
          className="image-third-section"
          src={alvo}
          alt={
            "Imagem de um alvo com flecha, um troféu e um gráfico. Imagem 3D."
          }
        />
        <article className="text-third-section">
          <h3>Mudar de CLT para PJ pode ser muito simples</h3>
          <h2>
            A burocracia para abrir um empresa te assusta? Fale com nossos
            especialistas.
          </h2>
          <aside className="checklist-container">
            <List
              color="black"
              data={[
                "Abertura de empresa com agilidade",
                "Sem sair de casa",
                "Digital e sem burocracia",
                "Orientações de forma simples e prática",
                "Acompanhamento feito por especialistas",
                "Suporte 100% humanizado",
              ]}
            />
          </aside>
          <ButtonWpp title="CONVERSAR COM UM ATENDENTE" />
        </article>
      </S.ThirdSection>
      <S.FourthSection>
        <h2>
          <span>Cuidamos</span> Da Sua Empresa Para Você Poder Cuidar Do Que
          Importa
        </h2>
        <p className="p-fourth-section">
          A Care entende a importância dos prestadores de serviços contratados
          como PJ e sabe que eles enfrentam desafios únicos. Diferentemente das
          grandes empresas, esses negócios têm poucas emissões de notas fiscais
          e não contratam funcionários. Nós acreditamos que a carga tributária
          já é suficientemente pesada no Brasil e não é justo que esta categoria
          de empresários pague os mesmos preços que empresas de maior porte por
          serviços contábeis. Por isso, oferecemos preços competitivos para
          nossos serviços, sem comprometer a excelência no atendimento. O foco
          da Care é sempre auxiliar esses empresários de maneira justa e
          eficiente.
        </p>
        <ButtonWpp title="SAIBA MAIS" />
      </S.FourthSection>
      <S.FiveSection>
        <h2>MUDAR PARA O PJ PODE SER MAIS SIMPLES DO QUE VOCÊ IMAGINA</h2>
        <h4>Porque Nós Estamos Do Seu Lado</h4>
        <article className="flex-cards">{cardList.map((element, index) => {
          return <CardQuality info={element} key={element.title + " " + index} />;
        })}</article>
      </S.FiveSection>
    </S.Container>
  );
}
