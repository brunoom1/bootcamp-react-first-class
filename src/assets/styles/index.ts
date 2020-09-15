import styled from "styled-components";
import githubLogo from "./../images/github-logo.svg";
import { shade, lighten, invert } from "polished";

import { getTheme } from "./themes-color";

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

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: ${getTheme().primaryTextColor};
    background-color: ${getTheme().secondaryTextColor};

    &::placeholder {
      color: ${lighten(.6, invert(getTheme().secondaryTextColor))};
    }
  }

  button {
    width: 210px;
    height: 70px;
    background-color: ${getTheme().primaryColor};
    border-radius: 0 5px 5px 0;
    border: 0;
    color: ${getTheme().secondaryTextColor};
    font-weight: bold;
    transition: background-color .2s;

    &:hover {
      background-color: ${shade(0.2, getTheme().primaryColor)}
    }
  }
  
`;

const theme = getTheme();

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