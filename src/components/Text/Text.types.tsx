export interface TextProps {
  size?: "small" | "medium" | "large";
  bold?: boolean;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  hidden?: boolean;
  children: React.ReactNode;
}
