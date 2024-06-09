import styled from "styled-components";
import { CardProps, ContainerProps } from "./Card.types";

const StyledContainer = styled.div<ContainerProps>`
  background-color: ${({ backgroundColor }) => backgroundColor || "#ddd"};
  border-radius: 0.25rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  padding: 1rem;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  width: 300px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

const Title = styled.h2<ContainerProps>`
  color: ${({ titleColor }) => titleColor || "#000"};
  font-weight: 500;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  margin-bottom: 0.75rem;
  word-wrap: break-word;
`;

const Description = styled.p<ContainerProps>`
  color: ${({ descriptionColor }) => descriptionColor || "#6c757d"};
  word-wrap: break-word;
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
`;

const StyledPhoto = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.25rem;
  margin-bottom: 1rem;
`;

export const Card = ({
  title,
  content,
  image,
  disabled,
  hidden,
  backgroundColor,
  titleColor,
  descriptionColor,
}: CardProps) => (
  <StyledContainer
    disabled={disabled}
    hidden={hidden}
    backgroundColor={backgroundColor}
  >
    {image && <StyledPhoto src={image} />}
    <Title titleColor={titleColor}>{title}</Title>
    <Description descriptionColor={descriptionColor}>{content}</Description>
  </StyledContainer>
);
