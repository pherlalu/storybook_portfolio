// InputTextField.stories.tsx
import type { Meta, StoryFn } from "@storybook/react";
import { InputTextField } from "./InputTextField";

const meta: Meta<typeof InputTextField> = {
  title: "Components/Input",
  component: InputTextField,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<typeof InputTextField> = (args) => (
  <InputTextField {...args} />
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "white",
  placeholder: "Input a text..",
  hidden: true,
};

export const Focused = Template.bind({});
Focused.args = {
  ...Default.args,
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  value: "Sample text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  value: "Sample text",
  disabled: true,
};
