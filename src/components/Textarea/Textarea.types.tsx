export interface TextareaProps {
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  backgroundColor?: string;
  textColor?: string;
  hidden?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
}
