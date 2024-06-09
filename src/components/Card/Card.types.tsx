export interface CardProps {
  title: string;
  content: string;
  image?: string;
  disabled?: boolean;
  hidden?: boolean;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}

export interface ContainerProps {
  disabled?: boolean;
  hidden?: boolean;
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
}
