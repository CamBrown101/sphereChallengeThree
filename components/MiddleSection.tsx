import React from "react";
import styled from "styled-components";
import colors from "../assets/colors";

const MiddleSection = () => {
  return (
    <MiddleWrapper>
      <div>
        <h3>Everyone Deserves Coaching</h3>
        <p>
          Coaching shouldn't start when you are a CEO, how do you get there
          without some guidance? Sphere is for everyone no matter where you are
          in your journey. If you want to improve your career, relationships or
          life download are app and get paired with your ideal Guides.
        </p>
      </div>
      <div>
        <h3>Bringing The Best Guides For You</h3>
        <p>
          At Sphere we personally vett all of our Guides to insure you are
          getting support from people who are talented, passionate, and
          certified. Our Guides come from all walks of life allowing them to
          offer guidance in any area which you are seeking development. To
          ensure your Guide is the best match for you, have your first session
          on us.
        </p>
      </div>
      <div>
        <h3>Coaching Should Be Accessible</h3>
        <p>
          We are bringing coaching to the masses by making our Guides avaliable
          to you anywhere with our App. Our App is an end to end coaching
          experience by allowing you to schedule, message and have your sessions
          in your pocket. We offer multiple payment plans so that you can choose
          the option that works best for you.
        </p>
      </div>
    </MiddleWrapper>
  );
};

export default MiddleSection;

const MiddleWrapper = styled.section`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: space-between;
  background-color: ${colors.blue_primary};
`;
