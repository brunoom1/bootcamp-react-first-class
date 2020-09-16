import React from "react";
import styled from "styled-components";

import { PageContainerWithBackgroundLogo as PageContainer } from "./../../assets/styles";
import logoFile from "./../../assets/images/logo-app.svg";


const ImageLogo = styled.img`
  margin-top: 20px;
`;


const Layout: React.FC = (props) => <PageContainer>
  <ImageLogo src={logoFile} alt="Logo github explorer" />
  {props.children}
</PageContainer>


export default Layout;