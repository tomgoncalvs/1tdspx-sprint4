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

interface Disciplina {
  ID: number;
  URL: string;
  TITULO: string;
  DESCRICAO: string;
}

const DisciplinasPage = () => {
  const [disciplinas, setDisciplinas] = useState<Disciplina[]>([]);

  useEffect(() => {
    const fetchDisciplinas = async () => {
      try {
        const response = await axios.get('http://localhost:3000/site_disciplinas');
        setDisciplinas(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchDisciplinas();
  }, []);

  return (
    <StyledPageDisciplinas className='Disciplinas'>
      <StyledMiniTitle>- Lista de Matérias -</StyledMiniTitle>
      <StyledTitle>Disciplinas</StyledTitle>
      <StyledCardsContainer>
        {disciplinas.map((disciplina) => (
          <StyledCard key={disciplina.ID}>
            <Image 
              src={disciplina.URL} 
              alt={disciplina.TITULO} 
              width={32} 
              height={32} 
            />
            <StyledCardContent>
              <StyledCardTitle>{disciplina.TITULO}</StyledCardTitle>
              <StyledCardDescription>{disciplina.DESCRICAO}</StyledCardDescription>
            </StyledCardContent>
          </StyledCard>
        ))}
      </StyledCardsContainer>
    </StyledPageDisciplinas>
  );
};

export default DisciplinasPage;
