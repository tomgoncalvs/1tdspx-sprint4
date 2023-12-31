import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
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
} from "./Cases.Style";

interface CaseItem {
  ID: number;
  URL: string;
  TITULO: string;
  DESCRICAO: string;
  BOTAO: string;
}

const SolutionsPage = () => {
  const [cases, setCases] = useState<CaseItem[]>([]);

  useEffect(() => {
    const fetchCases = async () => {
      try {
        const response = await axios.get("http://localhost:3000/site_cases");
        setCases(response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchCases();
  }, []);

  return (
    <StyledCasesContainer className="Cases">
      <StyledMiniTitle>CASES</StyledMiniTitle>
      <StyledTitle>Conheça nossas</StyledTitle>
      <StyledTitle>soluções desenvolvidas</StyledTitle>
      <StyledSubtitle>
        Alguns clientes que confiaram no nosso trabalho
      </StyledSubtitle>
      <StyledCardsContainer>
        {cases.map((caseItem) => (
          <StyledCard key={caseItem.ID}>
            <StyledCardImage>
              {caseItem.URL && (
                <Image
                  src={caseItem.URL}
                  alt={caseItem.TITULO || "Imagem do case"}
                  width={500}
                  height={300}
                  layout="responsive"
                />
              )}
            </StyledCardImage>
            <StyledCardTitle>{caseItem.TITULO}</StyledCardTitle>
            <StyledCardDescription>{caseItem.DESCRICAO}</StyledCardDescription>
            <StyledMoreButton>{caseItem.BOTAO}</StyledMoreButton>
          </StyledCard>
        ))}
      </StyledCardsContainer>
    </StyledCasesContainer>
  );
};

export default SolutionsPage;
