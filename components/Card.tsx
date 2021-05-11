import React from "react";
import Styled from "styled-components";
import colors from "../assets/colors";

type Props = {
  heading: string;
  backgroundColor?: string;
  content: string;
  image: string;
  imageRight?: boolean;
};
const Card = ({
  heading,
  backgroundColor,
  content,
  image,
  imageRight,
}: Props) => {
  console.log(content);
  return (
    <CardWrapper
      backgroundColor={backgroundColor ? backgroundColor : ""}
      imageRight={imageRight}>
      <img className="card-img" src={image} alt={image}></img>
      <div className="card-text">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-content">{content}</p>
      </div>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = Styled.div`
margin-bottom: 50px;
display: flex;
flex-direction: ${(props) => props.imageRight && "row-reverse"};
align-items: center;
padding: 20px;
background-color:  ${(props) =>
  props.backgroundColor ? props.backgroundColor : colors.black};
;
height: 400px;

.card-content, .card-heading {
color: ${(props) => (props.backgroundColor ? colors.black : colors.white)};
}
.card-img {
    width: 300px;
    height: auto;
}
.card-content {
  font-size: 30px;
}
.card-heading {
  font-size: 50px;
}
.card-text {
  padding: 30px;
}
`;
