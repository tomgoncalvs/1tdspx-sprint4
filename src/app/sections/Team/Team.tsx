"use client";
import Image from 'next/image';
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
import AvatarEwerton from '/images/avatar/ewerton-linkedin.jpeg';
import AvatarBeatriz from '../../../../public/images/avatar/beatriz-linkedin.jpeg'
import AvatarThiago from '../../../../public/images/avatar/thiago-linkedin.jpg'
import AvatarEnzo from '../../../../public/images/avatar/enzo-linkedin.jpeg'
import AvatarGuilherme from '../../../../public/images/avatar/guilherme-linkedin.jpeg'
import { StyledMiniTitle } from '../Cases/Cases.Style';

const TeamPage = () => {
  return (
    <StyledTeamContainer>
        <StyledMiniTitle>- A Melhor Equipe do Mundo -</StyledMiniTitle>
      <StyledTeamTittle>Conheça Nosso Time</StyledTeamTittle>
      <StyledCardsContainer>
      <StyledCard>
      <StyledCardImage src="/images/avatar/ewerton-linkedin.jpeg" alt="Avatar Ewerton Gonçalves" />
          <StyledCardName>Ewerton Gonçalves</StyledCardName>
          <StyledCardDescription>RM98571</StyledCardDescription>
          <StyledSocialIcons>
            <StyledIcon href="https://www.linkedin.com/in/ewerton-goncalves/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </StyledIcon>
            <StyledIcon href="https://github.com/tomgoncalvs" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </StyledIcon>
          </StyledSocialIcons>
        </StyledCard>
        <StyledCard>
        <StyledCardImage src="/images/avatar/beatriz-linkedin.jpeg" alt="Avatar Ewerton Gonçalves" />
          <StyledCardName>Beatriz Lucas</StyledCardName>
          <StyledCardDescription>RM99104</StyledCardDescription>
          <StyledSocialIcons>
            <StyledIcon href="https://www.linkedin.com/in/bealucas/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </StyledIcon>
            <StyledIcon href="https://github.com/Binhatrix" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </StyledIcon>
          </StyledSocialIcons>
        </StyledCard>
        <StyledCard>
        <StyledCardImage src="/images/avatar/thiago-linkedin.jpg" alt="Avatar Ewerton Gonçalves" />
          <StyledCardName>Thiago Zupelli</StyledCardName>
          <StyledCardDescription>RM99085</StyledCardDescription>
          <StyledSocialIcons>
            <StyledIcon href="https://www.linkedin.com/in/thiagogz/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </StyledIcon>
            <StyledIcon href="https://github.com/thiagogz" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </StyledIcon>
          </StyledSocialIcons>
        </StyledCard>
        <StyledCard>
        <StyledCardImage src="/images/avatar/enzo-linkedin.jpeg" alt="Avatar Ewerton Gonçalves" />
          <StyledCardName>Enzo Farias</StyledCardName>
          <StyledCardDescription>RM98792</StyledCardDescription>
          <StyledSocialIcons>
            <StyledIcon href="https://www.linkedin.com/in/enzofarias/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </StyledIcon>
            <StyledIcon href="https://github.com/fariasao" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </StyledIcon>
          </StyledSocialIcons>
        </StyledCard>
        <StyledCard>
        <StyledCardImage src="/images/avatar/guilherme-linkedin.jpeg" alt="Avatar Ewerton Gonçalves" />
          <StyledCardName>Guilherme Tantulli</StyledCardName>
          <StyledCardDescription>RM97890</StyledCardDescription>
          <StyledSocialIcons>
            <StyledIcon href="https://www.linkedin.com/in/guilherme-tantulli-862a69184/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </StyledIcon>
            <StyledIcon href="https://github.com/GuilhermeTantulli" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </StyledIcon>
          </StyledSocialIcons>
        </StyledCard>
      </StyledCardsContainer>
    </StyledTeamContainer>
  );
};

export default TeamPage;
