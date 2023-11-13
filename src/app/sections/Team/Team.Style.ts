import styled from 'styled-components';

const LargeDevices = '992px';
const MediumDevices = '768px';
const SmallDevices = '600px';
const ExtraSmallDevices = '400px';

export const StyledTeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #ffffff;
  text-align: center;
`;

export const StyledTeamTittle = styled.h1`
  font-size: 50px;
  text-align: center;
  margin-bottom: 80px;
  font-family: "Lora", serif; 
  font-weight: 300;
  line-height: 1.1;
  color: #323232;
  @media (max-width: ${SmallDevices}) {
    font-size: 2rem;
    text-align: center;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 3rem;
    line-height: 1;
    margin-bottom: 40px;
    text-align: center;
  }
`;

export const StyledCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  @media (max-width: ${LargeDevices}) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: ${MediumDevices}) {
    display: block;
    flex-direction: column;
    width: 35%;
    margin-bottom: 50px;
  }
  @media (max-width: ${SmallDevices}) {
    display: block;
    flex-direction: column;
    width: 45%;
    margin-bottom: 50px;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    display: block;
    flex-direction: column;
    width: 70%;
    margin-bottom: 50px;
  }
`;

export const StyledCard = styled.div`
  border-radius: 10px;
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
  @media (max-width: ${MediumDevices}) {
    margin-bottom: 50px;
  }
  @media (max-width: ${SmallDevices}) {
    margin-bottom: 50px;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    margin-bottom: 50px;
  }
`;

export const StyledCardImage = styled.div<{ src: string }>`
  width: 210px;
  height: 205px;
  border-radius: 5%;
  margin: 0 auto;
  display: block;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #ddd;
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.src});
  @media (max-width: ${ExtraSmallDevices}) {
    width: 99%;
    height: 60%;
  }
`;

export const StyledCardName = styled.h3`
  font-size: 20px;
  margin: 20px 0;
  color: black;
  @media (max-width: ${MediumDevices}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.7rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1.5rem;
  }
`;

export const StyledCardDescription = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: #000000;
  @media (max-width: ${MediumDevices}) {
    font-size: 1.2rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1.2rem;
  }
`;

export const StyledSocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  color:black;
`;

export const StyledIcon = styled.a`
  color: #2E279D;
  font-size: 24px;
  transition: color 0.3s ease;
  &:hover {
    color: #ff4136;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 2.2rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 2rem;
  }
`;
