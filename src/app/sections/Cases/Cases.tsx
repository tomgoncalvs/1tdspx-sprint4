"use client";
import Image from 'next/image'; // Importando Image de 'next/image' para otimização
import {
  StyledCasesContainer,
  StyledMiniTitle,
  StyledTitle,
  StyledSubtitle,
  StyledCardsContainer,
  StyledCard,
  StyledCardImage, 
  StyledCardTitle,
  StyledCardDescription,
  StyledMoreButton,
} from './Cases.Style';

const SolutionsPage = () => {
  return (
    <StyledCasesContainer className='Cases'>
      <StyledMiniTitle>CASES</StyledMiniTitle>
      <StyledTitle>Conheça nossas</StyledTitle>
      <StyledTitle>soluções desenvolvidas</StyledTitle>
      <StyledSubtitle>Alguns clientes que confiaram no nosso trabalho</StyledSubtitle>
      <StyledCardsContainer>
        {/* Repetir o StyledCard para cada cliente como necessário */}
        <StyledCard>
          <StyledCardImage>
          <Image
              src='/images/logo-porto.png' 
              alt="Cliente 1"
              width={500}
              height={300}
              layout="responsive"
            />
          </StyledCardImage>
          <StyledCardTitle>Porto Seguro</StyledCardTitle>
          <StyledCardDescription>Desenvolvimento de um aplicativo de solicitação de guinchos On-Demand, aumentando a assertividade do serviço de guinchos</StyledCardDescription>
          <StyledMoreButton>Saiba Mais</StyledMoreButton>
        </StyledCard>
        <StyledCard>
          <StyledCardImage>
          <Image
              src='/images/logo-porto.png'
              alt="Cliente 1"
              width={500}
              height={300}
              layout="responsive"
            />
          </StyledCardImage>
          <StyledCardTitle>Porto Seguro</StyledCardTitle>
          <StyledCardDescription>Desenvolvimento de um aplicativo de solicitação de guinchos On-Demand, aumentando a assertividade do serviço de guinchos</StyledCardDescription>
          <StyledMoreButton>Saiba Mais</StyledMoreButton>
        </StyledCard>
        <StyledCard>
          <StyledCardImage>
          <Image
              src='/images/logo-porto.png'
              alt="Cliente 1"
              width={500}
              height={300}
              layout="responsive"
            />
          </StyledCardImage>
          <StyledCardTitle>Porto Seguro</StyledCardTitle>
          <StyledCardDescription>Desenvolvimento de um aplicativo de solicitação de guinchos On-Demand, aumentando a assertividade do serviço de guinchos</StyledCardDescription>
          <StyledMoreButton>Saiba Mais</StyledMoreButton>
        </StyledCard>
        
      </StyledCardsContainer>
    </StyledCasesContainer>
  );
};

export default SolutionsPage;
