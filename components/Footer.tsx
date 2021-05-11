import React from "react";
import Styled from "styled-components";
import colors from "../assets/colors";
import { Button } from "./Header";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInnerWrapper>
        <p>
          To ensure your Guide is the best match for you, have your first
          session on us.
        </p>
        <Button href="https://sphere.guide/">Try for Free</Button>
      </FooterInnerWrapper>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = Styled.footer`
width: 100%;
min-height: 150px;
background-color: ${colors.black};
display: flex;
justify-content: center;

`;

const FooterInnerWrapper = Styled.div`
width: 65%;
color: ${colors.white};
font-size: 25px;
text-align: center;
`;
