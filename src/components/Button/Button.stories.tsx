import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";
import { ButtonProps } from "./Button.types";

const meta: Meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    backgroundColor: {
      control: "color",
    },
    textColor: {
      control: "color",
    },
    hidden: {
      control: "boolean",
    },
  },
};

export default meta;
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  backgroundColor: "#000",
  textColor: "#ffffff",
};

export const Hover = Template.bind({});
Hover.args = {
  label: "Hover Button",
  backgroundColor: "#b4d833",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  disabled: true,
};
