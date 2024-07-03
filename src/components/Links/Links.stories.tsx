import type { Meta, StoryFn } from "@storybook/react";
import { Links } from "./Links";
import { userEvent, within } from "@storybook/test";

const meta: Meta = {
  title: "Components/Link",
  component: Links,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    bgColor: { control: "color" },
    disabled: { control: "boolean" },
    hidden: { control: "boolean" },
    children: { control: "text" },
  },
};

export default meta;

const Template: StoryFn<typeof Links> = (args) => <Links {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Sample Link",
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByTestId("LinksElement");
  await userEvent.click(linkElement);
};

export const Hover = Template.bind({});
Hover.args = {
  children: "Sample Link",
  color: "#3b8026",
};
Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const linkElement = canvas.getByTestId("LinksElement");
  await userEvent.hover(linkElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Sample Link",
  disabled: true,
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const disabledLinkElement = canvas.getByTestId("LinksElement");
  await userEvent.click(disabledLinkElement);
};

export const Hidden = Template.bind({});
Hidden.args = {
  children: "Sample Link",
  hidden: true,
};
Hidden.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const hiddenLinkElement = canvas.getByTestId("LinksElement");
  await userEvent.click(hiddenLinkElement);
};
