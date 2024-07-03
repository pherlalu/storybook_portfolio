// InputTextField.stories.tsx
import type { Meta, StoryFn } from "@storybook/react";
import { InputTextField } from "./InputTextField";
import { userEvent, within } from "@storybook/test";

const meta: Meta<typeof InputTextField> = {
  title: "Components/Input",
  component: InputTextField,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<typeof InputTextField> = (args) => (
  <InputTextField {...args} data-testid="InputFieldElement" />
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: "white",
  placeholder: "Input a text..",
  hidden: true,
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputField = canvas.getByTestId("InputFieldElement");
  await userEvent.click(inputField);
};

export const Focused = Template.bind({});
Focused.args = {
  ...Default.args,
};
Focused.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputField = canvas.getByTestId("InputFieldElement");
  await userEvent.click(inputField);
};

export const Filled = Template.bind({});
Filled.args = {
  ...Default.args,
  value: "Sample text",
};
Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputField = canvas.getByTestId("InputFieldElement");
  await userEvent.type(inputField, "Sample text");
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  value: "Sample text",
  disabled: true,
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const inputField = canvas.getByTestId("InputFieldElement");
  await userEvent.click(inputField);
};
