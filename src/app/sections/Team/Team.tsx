"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  StyledTeamContainer,
  StyledTeamTittle,
  StyledCardsContainer,
  StyledCard,
  StyledCardImage,
  StyledCardName,
  StyledCardDescription,
  StyledSocialIcons,
  StyledIcon,
} from '../Team/Team.Style'; 
import { StyledMiniTitle } from '../Cases/Cases.Style';

interface TeamMember {
  ID: number;
  URL: string;
  NOME: string;
  DESCRICAO: string;
  URL_LINKEDIN: string;
  URL_GITHUB: string;
}

const TeamPage = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get('http://localhost:3000/site_time');
        setTeamMembers(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchTeamMembers();
  }, []);

  return (
    <StyledTeamContainer>
      <StyledMiniTitle>- A Melhor Equipe do Mundo -</StyledMiniTitle>
      <StyledTeamTittle>Conheça Nosso Time</StyledTeamTittle>
      <StyledCardsContainer>
        {teamMembers.map((member) => (
          <StyledCard key={member.ID}>
            <StyledCardImage>
              <Image src={member.URL} alt={`Avatar ${member.NOME}`} width={210} height={210} />
            </StyledCardImage>
            <StyledCardName>{member.NOME}</StyledCardName>
            <StyledCardDescription>{member.DESCRICAO}</StyledCardDescription>
            <StyledSocialIcons>
              <StyledIcon href={member.URL_LINKEDIN} target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </StyledIcon>
              <StyledIcon href={member.URL_GITHUB} target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </StyledIcon>
            </StyledSocialIcons>
          </StyledCard>
        ))}
      </StyledCardsContainer>
    </StyledTeamContainer>
  );
};

export default TeamPage;
