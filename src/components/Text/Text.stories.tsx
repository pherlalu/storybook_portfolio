import type { Meta, StoryFn } from "@storybook/react";
import { Text } from "./Text";

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

const Template: StoryFn<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Default Text",
};

export const Small = Template.bind({});
Small.args = {
  children: "Sample Text",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Sample Text",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  children: "Sample Text",
  size: "large",
};

export const Bold = Template.bind({});
Bold.args = {
  children: "MONSERRAT FONT STYLE",
  bold: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Sample Text",
  disabled: true,
};
