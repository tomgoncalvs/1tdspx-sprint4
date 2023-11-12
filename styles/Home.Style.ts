"use client"

import styled from 'styled-components';

const LargeDevices = '992px';
const MediumDevices = '768px';
const SmallDevices = '600px';
const ExtraSmallDevices = '400px';

export const StyledHome = styled.div`
display:flex;  
background-color: #ffffff;
width:100%;
padding: 100px 0;
@media (max-width: ${SmallDevices}) {
    padding: 30px 0;
    min-height: 100vh;
}
`;

export const StyledContent = styled.div`
  flex: 1;
  margin: 45px auto;
  text-align: left;
  padding: 0px 0px 0px 80px;
  @media (max-width: ${SmallDevices}) {
    flex: none;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0px 0px 0px 0px;
    width: 90%;
  }
`;
export const StyledImageHome = styled.div`
  flex: 2;
  display: flex;
  justify-content: flex-end;
  @media (max-width: ${SmallDevices}) {
   display: none;
}
`;

export const StyledImage = styled.img`
  height: auto;
  margin-top: 10px;
 
  @media (max-width: ${MediumDevices}) {
    width: 100%;
    flex: none;
  }
  @media (max-width: ${SmallDevices}) {
    display: none;
    flex: none;
  }

`;


export const StyledTpc = styled.h2`
  font-size: 70px;
  font-weight: bold;
  margin-bottom: 20px;
  color: black;
  font-family: "Lora", serif;
  line-height: 30px;

  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 6rem;
  }

`;

export const StyledSubTpc = styled.p`
  font-size: 12px;
  margin-top: 30px;
  margin-bottom: 40px;
  color: black;
  @media (max-width: ${LargeDevices}) {
    font-size: 1rem;
  }
  @media (max-width: ${MediumDevices}) {
    font-size: 1.3rem;
    padding: 0 20px;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.6rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1.2rem;
    margin: 20px 50px;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: ${SmallDevices}) {
    place-content: center;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    margin-top: 50px;
  }
`;

export const StyledContactButton = styled.button`
  background-color: #2E279D;
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  @media (max-width: ${MediumDevices}) {
    font-size: 1.1rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.6rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1.1rem;
  }
`;


export const StyledCasesButton = styled.button`
  background-color: #ffffff;
  color: #2E279D;
  border: 2px solid #2E279D;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  @media (max-width: ${MediumDevices}) {
    font-size: 1.1rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.6rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1.1rem;
  }
`;