import React from "react";
import Styled from "styled-components";
import colors from "../assets/colors";

const BottomSection = () => {
  return (
    <BottomSectionWrapper>
      <BottomSectionInnerWrapper>
        <h2>To get started:</h2>
        <ul>
          <li>Download our App for iOS here or Android here</li>
          <li>Sign up and take our assessment</li>
          <li>
            Our algorithim will pair you with multiple guides to choose from
          </li>
          <li>Book your first session with a guide on us</li>
          <li>If you enjoy it become a Member</li>
        </ul>
      </BottomSectionInnerWrapper>
    </BottomSectionWrapper>
  );
};
export default BottomSection;

const BottomSectionWrapper = Styled.section`
width: 100%;
display: flex;
justify-content: center;
background-color: ${colors.black};
`;

const BottomSectionInnerWrapper = Styled.div`
width: 65%;
color: ${colors.white};
`;
