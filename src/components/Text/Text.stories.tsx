import type { Meta, StoryFn } from "@storybook/react";
import { Text } from "./Text";
import { userEvent, within } from "@storybook/test";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    disabled: { control: "boolean" },
    hidden: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<typeof Text> = (args) => (
  <Text {...args} data-testid="TextElement" />
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Text",
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const textElement = canvas.getByTestId("TextElement");
  await userEvent.click(textElement);
};

export const Small = Template.bind({});
Small.args = {
  children: "Sample Text",
  size: "small",
};
Small.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const smallTextElement = canvas.getByTestId("TextElement");
  await userEvent.click(smallTextElement);
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Sample Text",
  size: "medium",
};
Medium.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const mediumTextElement = canvas.getByTestId("TextElement");
  await userEvent.click(mediumTextElement);
};

export const Large = Template.bind({});
Large.args = {
  children: "Sample Text",
  size: "large",
};
Large.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const largeTextElement = canvas.getByTestId("TextElement");
  await userEvent.click(largeTextElement);
};

export const Bold = Template.bind({});
Bold.args = {
  children: "MONSERRAT FONT STYLE",
  bold: true,
};
Bold.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const boldTextElement = canvas.getByTestId("TextElement");
  await userEvent.click(boldTextElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Sample Text",
  disabled: true,
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const disabledTextElement = canvas.getByTestId("TextElement");
  await userEvent.click(disabledTextElement);
};
