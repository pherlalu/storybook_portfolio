import type { Meta, StoryFn } from "@storybook/react";
import { Links } from "./Links";
import { LinkProps } from "./Links.types";

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

const Template: StoryFn<LinkProps> = (args) => <Links {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Sample Link",
  href: "#",
};

export const Hover = Template.bind({});
Hover.args = {
  children: "Sample Link",
  href: "#",
  color: "#3b8026",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Sample Link",
  disabled: true,
};

export const Hidden = Template.bind({});
Hidden.args = {
  children: "Sample Link",
  href: "#",
  hidden: true,
};
