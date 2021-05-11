import React from "react";
import Styled from "styled-components";
import colors from "../assets/colors";

const TopSection = () => {
  return (
    <TopSectionWrapper>
      <p>Unlock the best you</p>
      <p>
        Sphere is an end to end coaching experience in your pocket. With Sphere
        coaching is accessable to the masses. Our platform is allowing anyone
        and everyone to be paired with an ideal Guide to help you learn about
        yourself and take action to grow into the best version of you.
      </p>
      <p>
        Our guides are specialized, certifide and trained to help you accomplish
        your goals. Our guides are future facing, goal orientated and an
        unbiased partner to support your wellness. Our Guides are here to help
        you achieve your personal and professional goals.
      </p>
    </TopSectionWrapper>
  );
};

export default TopSection;

const TopSectionWrapper = Styled.header`
background-color: ${colors.black};
color: ${colors.white};
width: 100%;
height: 500px;
`;
