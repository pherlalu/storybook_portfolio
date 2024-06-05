import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./MyButton";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
};

export default meta;

const Template: StoryObj<typeof Button> = {
  args: {
    label: "Button",
    primary: true,
    size: "medium",
  },
};

export const Primary: StoryObj<typeof Button> = {
  ...Template,
  args: {
    ...Template.args,
    label: "Primary Button",
  },
};

export const Disabled: StoryObj<typeof Button> = {
  ...Template,
  args: {
    ...Template.args,
    label: "Disabled Button",
    disabled: true,
  },
};

export const Hover: StoryObj<typeof Button> = {
  ...Template,
  args: {
    ...Template.args,
    label: "Hover Button",
    hover: true,
  },
};
