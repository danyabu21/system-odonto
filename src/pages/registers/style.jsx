import styled from "styled-components";

export const Register = styled.section.attrs(({ $sidebar }) => $sidebar)`
  transition: all 0.3s;
  margin-left: ${(props) => (props.$sidebar === true ? "19rem" : "5.7rem")};
  margin-right: ${(props) => (props.$sidebar === true ? "1rem" : "2rem")};
`;
