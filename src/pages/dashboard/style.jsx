import styled from "styled-components";

export const Dashboard = styled.section.attrs((props) => props)`
  transition: all 0.3s;
  margin-left: ${(props) => (props.$sidebar === true ? "19rem" : "5.7rem")};
  margin-right: ${(props) => (props.$sidebar === true ? "1rem" : "2rem")};
`;

export const Charts = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  gap: 0 5rem;
  margin: 0 auto;
  margin-bottom: 5rem;
  margin-top: 2rem;
`;
