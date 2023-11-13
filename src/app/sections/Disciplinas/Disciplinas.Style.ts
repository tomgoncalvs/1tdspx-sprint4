import styled from 'styled-components';

const LargeDevices = '992px';
const MediumDevices = '768px';
const SmallDevices = '600px';
const ExtraSmallDevices = '400px';

export const StyledPageDisciplinas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color:#F7F6FB
`;

export const StyledCardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin-top: 20px;
  @media (max-width: ${SmallDevices}) {
    justify-content: center;
  }
`;

export const StyledCard = styled.div`
  border-radius: 10px;
  border: 1px solid #ddd;
  padding: 20px;
  width: 48%;
  display: flex;
  @media (max-width: ${LargeDevices}) {
    width: 100%;
  }
  @media (max-width: ${MediumDevices}) {
    width: 98%;
  }
  @media (max-width: ${SmallDevices}) {
    width: 90%;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    width: 86%;
  }
`;

export const StyledCardImage = styled.div`
  min-width: 100px !important;
  min-height: 100px !important;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  margin-top: 35px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border: 15px solid #ffffff;

  @media (max-width: ${ExtraSmallDevices}) {
    min-width: 80px;
    min-height: 80px;
    margin-top: 65px;
  }
`;

export const StyledCardContent = styled.div`
  flex: 1;
`;

export const StyledCardTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: black;
  margin-left: 15px;
  @media (max-width: ${MediumDevices}) {
    font-size: 1.5rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.7rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1.2rem;
  }
`;

export const StyledCardDescription = styled.p`
  font-size: 16px;
  color: black;
  @media (max-width: ${MediumDevices}) {
    font-size: 1.2rem;
  }
  @media (max-width: ${SmallDevices}) {
    font-size: 1.4rem;
  }
  @media (max-width: ${ExtraSmallDevices}) {
    font-size: 1rem;
  }
`;