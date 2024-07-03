// Card.lib.ts
import { CardProps } from "./Card.types";

export const renderCard = ({
  title,
  content,
  image,
  disabled,
  hidden,
  backgroundColor,
  titleColor,
  descriptionColor,
}: CardProps) => ({
  title,
  content,
  image,
  disabled,
  hidden,
  backgroundColor,
  titleColor,
  descriptionColor,
});
