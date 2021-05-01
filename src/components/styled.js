import styled from "styled-components";

export const Container = styled.div`
  margin: 0px auto;
  max-width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
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
  margin-top: 10px;
  width: 56px;
  box-shadow: 0 0 5px black;

  @media (max-width: 420px) {
    width: 34px;
  }
`;

export const Temperature = styled.span`
  font-size: 1.2rem;
  text-align: center;
`;

export const Label = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
