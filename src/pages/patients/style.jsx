import styled from "styled-components";

export const Patients = styled.section.attrs(({ $sidebar }) => $sidebar)`
  transition: all 0.3s;
  margin-left: ${(props) => (props.$sidebar === true ? "19rem" : "5.7rem")};
  margin-right: ${(props) => (props.$sidebar === true ? "1rem" : "2rem")};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px 0;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 1rem 0;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;
