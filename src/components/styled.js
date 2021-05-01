import styled from "styled-components";

export const Container = styled.div`
  height: 20rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  max-width: 100%;
  @media (max-width: 425px) {
    margin: 1.6rem 0 0 2.6rem;
    height: 10rem;
  },
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  @media (max-width: 425px) {
    width: 40%;
    transform: rotate(90deg);
  },
`;

export const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const Bar = styled.div`
  height: ${(props) => props.height}%;
  background-color: lightblue;
  margin-top: 1rem;
  width: 2.4rem;
  box-shadow: 0 0 0.5rem black;

  @media (max-width: 425px) {
    width: 1.5rem;
  }
`;

export const Temperature = styled.span`
  font-size: 1.2rem;
  text-align: center;
  @media (max-width: 425px) {
    transform: rotate(270deg);
  },
`;

export const Label = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  @media (max-width: 425px) {
    margin-top: 2rem;
    transform: rotate(270deg);
  },
`;
