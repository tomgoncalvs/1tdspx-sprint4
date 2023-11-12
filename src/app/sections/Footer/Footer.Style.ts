import styled from 'styled-components';

const LargeDevices = '992px';
const MediumDevices = '768px';
const SmallDevices = '600px';
const ExtraSmallDevices = '400px';

export const StyledFooter = styled.footer`
  padding: 40px 40px;
  background-color: #ffffff;
`;

export const StyledFooterDivs = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between; 
  gap: 80px;
  @media (max-width: ${SmallDevices}) {
    display: block;
    text-align: center;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    display: block;
    text-align: center;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  color: #2E279D;
  @media (max-width: ${SmallDevices}) {
    display: block;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    display: block;
  }
`;

export const LogoName = styled.h1`
  margin-left: 0px;
`;

export const StyledSection = styled.div`
  flex: 1;
  margin-right: 40px;
  color: black;
  
  ul, ol {
    list-style: none; 
    padding-left: 0; 
  }
  @media (max-width: ${MediumDevices}) {
    font-size: 1.2rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.7rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1rem;
    margin-right: 0;
    padding: 0 20px;
  }
`;


export const StyledSectionTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 20px;
  color: black;
  @media (max-width: ${MediumDevices}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.7rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1rem;
  }
`;

export const StyledDescription = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  color: black;
  @media (max-width: ${MediumDevices}) {
    font-size: 1.2rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1.2rem;
    text-align: center;
  }
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: ${SmallDevices}) {
    display: block;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    display: block;
  }
`;

export const StyledIcon = styled.a`
  color: #2E279D;
  font-size: 24px;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4136;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 3rem;
    margin: 10px;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 2rem;
    margin: 10px;
  }
`;

export const StyledDivider = styled.hr`
  border: 1px solid #ddd;
  margin: 40px 0;
`;

export const StyledCopyright = styled.p`
  font-size: 14px;
  text-align: center;
  color: #999;
  @media (max-width: ${LargeDevices}) {
    font-size: 1.3rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.7rem;
  }
`;

export const StyledRef = styled.a`
  color: black;
`;