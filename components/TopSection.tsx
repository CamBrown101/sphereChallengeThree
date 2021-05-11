import React from "react";
import Styled from "styled-components";
import colors from "../assets/colors";

const TopSection = () => {
  return (
    <TopSectionWrapper>
      <TopSectionInnerWrapper>
        <h3>Unlock The Best Version of You.</h3>
        <p>
          Sphere is an accessible end to end coaching experience in your pocket.
          Our platform is allowing anyone and everyone to be paired with an
          ideal Guide to help you learn about yourself and take action to grow
          into the best version of you.
        </p>

        <Button href="https://sphere.guide/">Try for Free</Button>
      </TopSectionInnerWrapper>
    </TopSectionWrapper>
  );
};

export default TopSection;

const TopSectionWrapper = Styled.header`
background-color: ${colors.black};
width: 100%;
height: 500px;
min-height: 500px;
margin-top: 70px;
display: flex;
align-items: center;
justify-content: center;
`;

const TopSectionInnerWrapper = Styled.div`
margin-top: 80px;
width: 65%;
color: ${colors.white};
display: flex;
flex-direction: column;

h3 {
  font-size: 60px;
}
p {
  font-size: 35px;
}
`;

export const Button = Styled.a`
  margin-top: 30px;
  background-color: ${colors.blue_primary};
  border-radius: 10px;
  padding: 10px 25px;
  font-size: 25px;
  color: ${colors.white};
  border: 0;
  cursor: pointer;
  align-self: center;
`;
