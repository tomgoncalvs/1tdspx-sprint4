"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { StyledMiniTitle, StyledTitle } from '../Cases/Cases.Style';
import {
  StyledCardsContainer,
  StyledCard,
  StyledCardContent,
  StyledCardTitle,
  StyledCardDescription,
  StyledPageDisciplinas,
} from './Disciplinas.Style';

const DisciplinasPage = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.get('http://localhost:3000/site_disciplinas');
        setCases(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchCases();
  }, []);

  return (
    <StyledPageDisciplinas className='Disciplinas'>
      <StyledMiniTitle>- Lista de Matérias -</StyledMiniTitle>
      <StyledTitle>Disciplinas</StyledTitle>
      <StyledCardsContainer>
        {cases.map((caseItem) => (
          <StyledCard key={caseItem.ID}>
            <Image 
              src={caseItem.URL} 
              alt={caseItem.TITULO} 
              width={32} 
              height={32} 
            />
            <StyledCardContent>
              <StyledCardTitle>{caseItem.TITULO}</StyledCardTitle>
              <StyledCardDescription>{caseItem.DESCRICAO}</StyledCardDescription>
            </StyledCardContent>
          </StyledCard>
        ))}
      </StyledCardsContainer>
    </StyledPageDisciplinas>
  );
};

export default DisciplinasPage;
