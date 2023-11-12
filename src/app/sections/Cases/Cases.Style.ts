"use client";
import styled from 'styled-components';

const LargeDevices = '992px';
const MediumDevices = '768px';
const SmallDevices = '600px';
const ExtraSmallDevices = '400px';

export const StyledCasesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #F7F6FB;
`;

export const StyledMiniTitle = styled.p`
  font-size: 16px;
  color: #2E279D;
  text-transform: uppercase;
  @media (max-width: ${LargeDevices}) {
    font-size: 1.3rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.8rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1rem;
  }
`;

export const StyledTitle = styled.h1`
  font-size: 50px;
  text-align: center;
  color: #323232;
  font-family: "Lora", serif; 
  font-weight: 300;
  line-height: 1.3;
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 2rem;
  }
`;

export const StyledSubtitle = styled.h2`
  font-size: 16px;
  text-align: center;
  margin-bottom: 40px;
  color: #646464;
  font-family: "Ubuntu", sans-serif;
  font-weight: 200;
  @media (max-width: ${LargeDevices}) {
    font-size: 1.2rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 0.8rem;
  }
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: ${MediumDevices}) {
    display: block;
  }
  @media (max-width: ${SmallDevices}) {
    display: block;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    display: block;
  }
`;

export const StyledCard = styled.div`
  border-radius: 10px;
  border: 1px solid #ddd;
  padding: 20px;
  text-align: center;
  background-color: #FFFFFF;
  height: 357px;
  width: 320px;
  @media (max-width: ${LargeDevices}) {
   height: 350px; 
   width: 230px;
  }
  @media (max-width: ${MediumDevices}) {
    height: 500px; 
    margin-bottom: 50px;
   }
   @media (max-width: ${SmallDevices}) {
    height: 480px;
    margin-bottom: 50px;
  }
   @media (max-width: ${ExtraSmallDevices}) {
    height: 550px;
    margin-bottom: 50px;
    width: 350px;
  }
`;

export const StyledCardImage = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 35%;
  margin: 0 auto;
  display: block;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
  @media (max-width: ${ExtraSmallDevices}) {
    height: 32px;
    width: 32px;
  }
`;

export const StyledCardTitle = styled.h3`
  font-size: 20px;
  margin: 20px 0;
  color: #000000;
  @media (max-width: ${LargeDevices}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.7rem;
   }
   @media (max-width: ${ExtraSmallDevices}) {
    font-size: 2rem;
  }
`;

export const StyledCardDescription = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: #000000;
  font-weight: 200;
  @media (max-width: ${MediumDevices}) {
    font-size: 1.3rem;
  }
  @media (max-width: ${MediumDevices}) {
    font-size: 1.3rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1.4rem;
    padding: 0 25px;
  }
`;

export const StyledMoreButton = styled.button`
  background-color: #ffffff;
  color: #2E279D;
  border: 1px solid #2E279D;
  padding: 15px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;

  &:hover {
    background-color: #2E279D;
    color: #ffffff;
  }
  @media (max-width: ${MediumDevices}) {
    font-size: 1.1rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.3rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1.3rem;
    
  }
  
`;
