import type { Meta, StoryFn } from "@storybook/react";
import { Textarea } from "./Textarea";
import { userEvent, within } from "@storybook/test";

const meta: Meta<typeof Textarea> = {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "centered",
  },
};

export default meta;

const Template: StoryFn<typeof Textarea> = (args) => (
  <Textarea {...args} data-testid="TextareaElement" />
);

export const Empty = Template.bind({});
Empty.args = {
  placeholder: "Type your message...",
};

Empty.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textareaElement = canvas.getByTestId("TextareaElement");
  await userEvent.click(textareaElement);
};

export const Focused = Template.bind({});
Focused.args = {
  placeholder: "Type your message...",
};

Focused.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textareaElement = canvas.getByTestId("TextareaElement");
  await userEvent.click(textareaElement);
};

export const Filled = Template.bind({});
Filled.args = {
  value: "Sample text",
  placeholder: "Type your message...",
};

Filled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textareaElement = canvas.getByTestId("TextareaElement");
  await userEvent.type(textareaElement, "Sample text");
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "Sample text",
  placeholder: "Type your message...",
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textareaElement = canvas.getByTestId("TextareaElement");
  await userEvent.click(textareaElement);
};
