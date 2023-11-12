"use client";
import React from 'react';
import Image from 'next/image';
import { StyledMiniTitle, StyledTitle } from '../Cases/Cases.Style';
import {
  StyledPageDisciplinas,
  StyledCardsContainer,
  StyledCard,
  StyledCardContent,
  StyledCardTitle,
  StyledCardDescription,
} from './Disciplinas.Style';

const DisciplinasPage = () => {
  return (
    <StyledPageDisciplinas className='Disciplinas'>
        <StyledMiniTitle>- Lista de Matérias -</StyledMiniTitle>
      <StyledTitle>Disciplinas</StyledTitle>
      <StyledCardsContainer>
        <StyledCard>
          <Image src="/images/icons/Python.png" alt="Python" width={32} height={32} />
          <StyledCardContent>
            <StyledCardTitle>Computational Thinking Using Python</StyledCardTitle>
            <StyledCardDescription>Análise e filtragem de dados para a construção da base de dados armazenados pelo nosso sistema.</StyledCardDescription>
          </StyledCardContent>
        </StyledCard>
        <StyledCard>
          <Image src="/images/icons/Webdevelopment.png" alt="Python" width={32} height={32} />
          <StyledCardContent>
            <StyledCardTitle>Responsive Web Development</StyledCardTitle>
            <StyledCardDescription>Análise e filtragem de dados para a construção da base de dados armazenados pelo nosso sistema.</StyledCardDescription>
          </StyledCardContent>
        </StyledCard>
        <StyledCard>
          <Image src="/images/icons/Java.png" alt="Python" width={32} height={32} />
          <StyledCardContent>
            <StyledCardTitle>Domain Driven Design</StyledCardTitle>
            <StyledCardDescription>Aplicação do conceito de POO em Java, desenvolvento a aplicação e a conexão com o banco de dados.</StyledCardDescription>
          </StyledCardContent>
        </StyledCard>
        <StyledCard>
          <Image src="/images/icons/Ai.png" alt="Python" width={40} height={40} />
          <StyledCardContent>
            <StyledCardTitle>AI & Chatbot</StyledCardTitle>
            <StyledCardDescription>Construção de chatbot cognitivo para interação com os clientes e usuários e coleta de dados para futuro treinamento de uma IA.</StyledCardDescription>
          </StyledCardContent>
        </StyledCard>
        <StyledCard>
          <Image src="/images/icons/Oracle.png" alt="Python" width={40} height={40} />
          <StyledCardContent>
            <StyledCardTitle>Building Relational Database</StyledCardTitle>
            <StyledCardDescription>Criação e desenvolvimento do banco de dados ideal para armazenamento das informações necessárias para a aplicação por meio de linguagem SQL.</StyledCardDescription>
          </StyledCardContent>
        </StyledCard>
        <StyledCard>
          <Image src="/images/icons/Ux.png" alt="Python" width={40} height={40} />
          <StyledCardContent>
            <StyledCardTitle>Software Design & Total Experience</StyledCardTitle>
            <StyledCardDescription>Gerenciamento do projeto de forma ágil, mobilizando a equipe full stack para a realização dos trabalhos do ciclo de vida de planejamento.</StyledCardDescription>
          </StyledCardContent>
        </StyledCard>
        {/* Repita para os outros cartões, substituindo os caminhos das imagens e textos conforme necessário */}
      </StyledCardsContainer>
    </StyledPageDisciplinas>
  );
};

export default DisciplinasPage;
