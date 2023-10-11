import styled from "styled-components";

export const Logo = styled.img`
  display: block;
  max-width: 100%;
  margin: 0.5rem;
  width: 70px;
`;

export const RegisterPatient = styled.form.attrs(({ $sidebar }) => $sidebar)`
  transition: all 0.3s;
  padding-left: 0px;

  .container {
    display: grid;
    gap: 0.5rem;
    align-items: end;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    margin-bottom: 0.5rem;

    &:first-child {
      margin-bottom: 1rem;
    }

    &:nth-child(2) {
      margin-bottom: 0.5rem;
    }

    @media (max-width: 732px) {
      &:first-child {
        margin-bottom: 0.5rem;
      }

      &:nth-child(2) {
        margin-bottom: 0rem;
      }
    }

    .submit-button {
      width: 250px;
      margin-top: 2rem;
    }

    @media (max-width: 732px) {
      .submit-button {
        width: 100%;
      }
    }
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Carousel = styled.div`
  .splide {
    // display: flex;
    // align-items: center;
    // justify-content: center;
  }

  .slide-item {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px;
  }
`;

export const Textarea = styled.textarea`
  resize: none;
  display: block;
  width: 100%;
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  padding: 8px 12px;
  border-radius: 8px;
  color: #1c2025;
  background: #fff;
  border: 1px solid #c4c4c4;
  margin-top: 0.5rem;

  &:hover {
    border-color: transparent;
    box-shadow: inset 0 0 0 1px #333333;
  }

  &:focus {
    border-color: transparent;
    box-shadow: inset 0 0 0 2px #5a6ebf;
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`;
