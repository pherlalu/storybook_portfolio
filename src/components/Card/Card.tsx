import React from "react";
import styled from "styled-components";
import { CardProps, ContainerProps } from "./Card.types";
import { renderCard } from "./Card.lib";

const StyledContainer = styled.div<ContainerProps>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor || "rgba(33, 149, 243, 0.07)"};
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgba(59, 130, 246, 0.2),
    0 4px 6px -2px rgba(59, 130, 246, 0.2);
  padding: 1rem;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  width: 300px;
  height: 450px; /* Set a fixed height for the card */
  display: flex;
  flex-direction: column;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const Title = styled.h2<ContainerProps>`
  color: ${({ titleColor }) => titleColor || "#fff"};
  font-weight: 600;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  margin-bottom: 0.5rem;
  word-wrap: break-word;
`;

const Description = styled.p<ContainerProps>`
  color: ${({ descriptionColor }) => descriptionColor || "#bbb"};
  word-wrap: break-word;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  flex-grow: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Limit the number of lines */
  -webkit-box-orient: vertical;
`;

const StyledPhoto = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: rgba(33, 149, 243, 0.07);
  color: #fff;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  margin-top: 1rem;
  &:hover {
    background-color: rgb(33, 150, 243);
  }
`;

export const Card: React.FC<CardProps> = (props) => {
  const cardProps = renderCard(props);

  return (
    <StyledContainer
      disabled={cardProps.disabled}
      hidden={cardProps.hidden}
      backgroundColor={cardProps.backgroundColor}
      data-testid="CardElement"
    >
      {cardProps.image && <StyledPhoto src={cardProps.image} />}
      <Title titleColor={cardProps.titleColor}>{cardProps.title}</Title>
      <Description descriptionColor={cardProps.descriptionColor}>
        {cardProps.content}
      </Description>
      <Button>Learn More</Button>
    </StyledContainer>
  );
};
