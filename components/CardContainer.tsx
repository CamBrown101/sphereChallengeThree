import React from "react";
import Styled from "styled-components";
import colors from "../assets/colors";
import Card from "./Card";
import heroImage from "../assets/Images/hero_app_image.png";
import spaceMan from "../assets/Images/sphere_spaceman-1@2x.png";
import nasa from "../assets/Images/nasa@2x.png";

const CardContainer = () => {
  return (
    <CardContainerWrapper>
      <CardContainerInner>
        <Card
          heading="Bringing The Best Guides For You"
          content="At Sphere we personally vet all of our Guides to insure you are
            getting support from people who are talented, passionate, and
            certified. Our Guides come from all walks of life allowing them to
            offer guidance in any area which you are seeking development. Our Guides are 
            there to be an unbiased tool to help you grow."
          image={heroImage}
          imageRight={false}
          backgroundColor={"white"}
        />
        <Card
          heading="Everyone Deserves Coaching"
          content="Coaching shouldn't start when you are a CEO, how do you get there
            without some guidance? Sphere is for everyone no matter where you
            are in your journey. If you want to improve your career,
            relationships or life download our app and get paired with your
            ideal Guides."
          image={nasa}
          imageRight={true}
        />
        <Card
          heading="Coaching Should Be Accessible"
          content="We are bringing coaching to the masses by making our Guides
            available to you anywhere with our App. Our App is an end to end
            coaching experience, allowing you the access to schedule, message 
            and have sessions all in your pocket. We offer multiple payment plans so
            that you can choose the option that works best for you."
          image={spaceMan}
          imageRight={false}
          backgroundColor={"white"}
        />
      </CardContainerInner>
    </CardContainerWrapper>
  );
};

export default CardContainer;

const CardContainerWrapper = Styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: ${colors.black};
  `;

const CardContainerInner = Styled.div`
width: 90%;
display: flex;
flex-direction: column;
justify-content: space-between;
color: white;
padding-top: 80px;

.column {
  width: 28%;
  text-align: center;

  .column-heading {
    font-size: 30px;
  }
  .column-content {
    font-size: 20px;
    line-height: 27px;
  }
}


`;
