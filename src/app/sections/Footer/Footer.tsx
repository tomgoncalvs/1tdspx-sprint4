import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
import {
  StyledFooter,
  StyledFooterDivs,
  StyledSection,
  StyledSectionTitle,
  StyledDescription,
  StyledIconsContainer,
  StyledIcon,
  StyledDivider,
  StyledCopyright,
  Logo,
  LogoName,
  StyledRef,
} from './Footer.Style';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterDivs>
        <StyledSection>
          <Logo>
            <LogoName>TPC</LogoName>
          </Logo>
          <StyledDescription>Grupo de Estudantes da Faculdade FIAP - <br />Curso Análise e Desenvolvimento de sistemas.</StyledDescription>
          <StyledIconsContainer>
            <StyledIcon href="link_facebook" target="_blank">
              <FontAwesomeIcon icon={faFacebook} />
            </StyledIcon>
            <StyledIcon href="link_instagram" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </StyledIcon>
            <StyledIcon href="link_twitter" target="_blank">
              <FontAwesomeIcon icon={faTwitter} />
            </StyledIcon>
            <StyledIcon href="link_youtube" target="_blank">
              <FontAwesomeIcon icon={faYoutube} />
            </StyledIcon>
          </StyledIconsContainer>
        </StyledSection>

        <StyledSection>
          <StyledSectionTitle>Links</StyledSectionTitle>
          <ul>
            <li>
              <Link href="#Home" passHref>
                <StyledRef>Inicio</StyledRef>
              </Link>
            </li>
            <li>
              <Link href="#Cases" passHref>
                <StyledRef>Cases</StyledRef>
              </Link>
            </li>
            <li>
              <Link href="#Sobre" passHref>
                <StyledRef>Sobre</StyledRef>
              </Link>
            </li>
            <li>
              <Link href="#Disciplinas" passHref>
                <StyledRef>Disciplinas</StyledRef>
              </Link>
            </li>
          </ul>
        </StyledSection>

        <StyledSection>
          <StyledSectionTitle>Time</StyledSectionTitle>
          <ul>
            <li>Ewerton Gonçalves</li>
            <li>Beatriz Lucas</li>
            <li>Thiago Zupelli</li>
            <li>Enzo Farias</li>
            <li>Guilherme Tantulli</li>
          </ul>
        </StyledSection>

        <StyledSection>
          <StyledSectionTitle>Escritorio</StyledSectionTitle>
          <p>Brasil</p>
          <p>Av. Paulista, 1006 - sala 401</p>
        </StyledSection>
      </StyledFooterDivs>

      <StyledDivider />

      <StyledCopyright>© 2023 Think Plan & Code. Todos os direitos Reservados</StyledCopyright>
    </StyledFooter>
  );
};

export default Footer;
