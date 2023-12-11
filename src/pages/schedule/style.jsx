import styled from "styled-components";

export const Schedule = styled.section.attrs(({ $sidebar }) => $sidebar)`
  transition: all 0.3s;
  margin-left: ${(props) => (props.$sidebar === true ? "19rem" : "5.5rem")};
  margin-right: ${(props) => (props.$sidebar === true ? "1rem" : "2rem")};
  display: grid;
  align-items: center;

  .MuiFormControl-root {
    flex: 1;
  }

  .container {
    margin-bottom: 0.75rem;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 0.5rem;
    padding: 0px;
    display: flex;
    align-items: end;
    .input-name {
      grid-column: 1/3;
    }

    &:nth-child(2) {
      margin-bottom: 0px;
    }
  }

  .submit-button {
    width: 120px;
  }
`;
