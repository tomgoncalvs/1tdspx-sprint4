"use client"
import Image from 'next/image';
import HomeStyledImage from '../../../../public/images/work-from-home-for-new-normal-protocols-free-vector.png';
import {
  StyledHome,
  StyledContent,
  StyledImageHome,
  StyledTpc,
  StyledSubTpc,
  StyledButtonContainer,
  StyledContactButton,
  StyledCasesButton,
} from './Home.Style';
import FloatingMenu from '../../components/FloatingMenu';

const HomeContent = () => {
  return (
    <StyledHome className='Home'>
      <StyledContent>
      <FloatingMenu />
        <StyledTpc>Think</StyledTpc>
        <StyledTpc>Plan &</StyledTpc>
        <StyledTpc>Code</StyledTpc>
        <StyledSubTpc>
          Transformando ideias em realidade digital. 
          Pense, planeje e code conosco!
        </StyledSubTpc>
        <StyledButtonContainer>
          <StyledContactButton>Fale Conosco</StyledContactButton>
          <StyledCasesButton>Cases</StyledCasesButton>
        </StyledButtonContainer>
      </StyledContent>
      <StyledImageHome>
        <Image 
          src={HomeStyledImage} 
          alt="Trabalhando de casa"
          width={500} 
          height={300} 
          layout="responsive" 
        />
      </StyledImageHome>
    </StyledHome>
  );
};

export default HomeContent;
