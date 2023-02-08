import Image from "next/image";
import * as S from "../styles/pages/styles";

//import images
import logo from "../public/images/logo.png";
import bgStars from "../public/images/bgStars.png";
import business from "../public/images/business.png";
import alvo from "../public/images/alvo.png";
import List from "../components/List";
import ButtonWpp from "../components/ButtonWpp";
import QualityItem from "../components/QualityItem";
import {
  HandleIcon,
  MedalIcon,
  TaxIcon,
  TrophyIcon,
  MoneyIcon,
} from "../public/icons";
import { CardQuality } from "../components/CardQuality";
import { CardReport } from "../components/CardReport";

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

const reportsList = [
  {
    name: "Vanessa Dias - Engenheira",
    text: "Quando recebi a proposta de trabalhar como PJ fiquei assustada e com medo da burocracia. Fui muito bem orientada pela equipe da Care, que me tranquilizou e mostrou que o caminho para ser uma empresária eficiente pode ser mais simples que imaginamos.",
  },
  {
    name: "William Castro - Representante Comercial",
    text: "Contabilidade facilitada, com processos simplificados. Consigo me dedicar às minhas tarefas e ser mais produtivo, sabendo que as questões burocráticas estão em boas mãos.",
  },
  {
    name: "Tadeu Marinho - Fisioterapeuta",
    text: "Serviço prestado com excelência, com valor abaixo daquele cobrado por escritórios tradicionais. Além disso, com uma consultoria tributária esclarecedora, descobri que pagava mais impostos que o necessário e hoje estou aplicando a diferença na melhoria do meu negócio.",
  },
];

const doubtsList = [
  {
    question: "Por que preciso de um contador?",
    answer:
      "Além das questões fiscais, planejamento tributário e e apoio à administração, há uma razão fundamental: a tributação do lucro do empresário. A Lei Complementar N° 123/2006 (Estatuto do Simples Nacional) estabelece que caso a empresa mantenha escrituração contábil, todo o lucro será isento de Imposto de Renda.",
  },
  {
    question:
      "Contabilidade a um baixo custo implica em perda de qualidade no atendimento?",
    answer:
      "De maneira nenhuma. Um modelo de start-up contábil como o nosso dispensa espaços físicos exagerados e equipe numerosa, permitindo operar com baixo custo. Esta é a razão do nosso preço competitivo e em nada interfe na excelência do serviço prestado por nossos profissionais competentes.",
  },
  {
    question: "Serei atendido por um robô?",
    answer:
      "Não. Sabemos que a experiência de ser atendido por robôs nem sempre é satisfatória, sobretudo quando não resolvem nossos problemas naqueles momentos em que mais precisamos. Nosso atendimento é 100% humanizado, permitindo interação em tempo real com nossa equipe.",
  },
];

export default function Home() {

  const handleClick = () => {
    const url = encodeURI(
      `https://wa.me/+5521979383788`
    );
    window.location.href = url;
  };

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
            <ButtonWpp
              onClick={handleClick}
              title="CONVERSAR COM UM ATENDENTE"
            />
            <p className="email">atendimento@carecontabilidade.com.br</p>
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
          <ButtonWpp onClick={handleClick} title="CONVERSAR COM UM ATENDENTE" />
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
        <ButtonWpp onClick={handleClick} title="SAIBA MAIS" />
      </S.FourthSection>
      <S.FiveSection>
        <h2>MUDAR PARA O PJ PODE SER MAIS SIMPLES DO QUE VOCÊ IMAGINA</h2>
        <h4>Porque Nós Estamos Do Seu Lado</h4>
        <article className="flex-cards">
          {cardList.map((element, index) => {
            return (
              <CardQuality info={element} key={element.title + " " + index} />
            );
          })}
        </article>
      </S.FiveSection>
      <S.SixSection>
        <h2>O que nossos clientes dizem de nós ?</h2>
        <article className="six-section">
          {reportsList.map((element, index) => {
            return (
              <CardReport key={element.name + " " + index} info={element} />
            );
          })}
        </article>
      </S.SixSection>
      <S.SevenSection>
        <h2>Dúvidas frequentes...</h2>
        <span>
          Bem-vindo ao nosso FAQ! Aqui você encontrará as respostas para as
          perguntas mais comuns sobre nosso escritório de contabilidade. Se você
          não encontrar a informação que precisa, por favor, não hesite em{" "}
          <a href="https://wa.me/+5521979383788">entrar em contato conosco</a>.
        </span>
        {doubtsList.map((element, index) => {
          return (
            <S.DoubtsContainer
              key={"Questão " + element.question + " " + index}
            >
              <h3>{element.question}</h3>
              <p>{element.answer}</p>
            </S.DoubtsContainer>
          );
        })}
      </S.SevenSection>
    </S.Container>
  );
}
