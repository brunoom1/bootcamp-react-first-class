import styled, { css } from "styled-components";
import githubLogo from "./../images/github-logo.svg";
import { shade, lighten, invert } from "polished";

import { getTheme } from "./themes-color";

const theme = getTheme();

export const Error = styled.span`
  display: block;
  padding: 5px 0;
  color: ${theme.errorColor};
`;

export const Title = styled.h1`
  font-size: 2rem;
  max-width: 300px;
  margin-top: 5rem;
`;

export const PageContainer = styled.div`
  flex: 1;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const PageContainerWithBackgroundLogo = styled(PageContainer)`
  background-image: url(${githubLogo});
  background-position: right top;
  background-repeat: no-repeat;
`;

interface CustomForm {
  hasError: boolean;
}

export const Form = styled.form<CustomForm>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    color: ${theme.primaryTextColor};
    background-color: ${theme.secondaryTextColor};
    border: solid 2px ${theme.secondaryTextColor};

    ${(props) => props.hasError && css`
      border-color: ${theme.errorColor};
    `}

    border-right: 0;


    &::placeholder {
      color: ${lighten(.6, invert(theme.secondaryTextColor))};
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-color: ${theme.primaryColor};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: ${theme.secondaryTextColor};
    font-weight: bold;
    transition: background-color .2s;

    &:hover {
      background-color: ${shade(0.2, theme.primaryColor)}
    }
  }
  
`;

export const Repositories = styled.div`
  margin-top: 70px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  a {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: ${theme.secondaryTextColor};
    border-radius: 5px;

    color: ${theme.primaryTextColor};
    text-decoration: none;

    line-height: .4rem;
    padding: 10px 0;

    transition: transform .5s;

    &:hover {
      transform: translateX(1rem)
    }

    img {
      border-radius: 100%;
      max-width: 60px;
      max-height: 60px;
      margin: 0 10px;
    }

    span {
      flex: 1;
    }

    .icon {
      color: ${theme.primaryTextColor};
      margin-right: 10px;
    }

  }

`;