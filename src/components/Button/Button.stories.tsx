import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./Button";
import { userEvent, within } from "@storybook/test";

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

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args} data-testid="ButtonElement" />
);

export const Default = Template.bind({});
Default.args = {
  label: "Default Button",
  backgroundColor: "#000",
  textColor: "#ffffff",
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const submitButton = canvas.getByTestId("ButtonElement");
  await userEvent.click(submitButton);
};

export const Hover = Template.bind({});
Hover.args = {
  label: "Hover Button",
  backgroundColor: "#b4d833",
};
Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const hoverButton = canvas.getByTestId("ButtonElement");
  await userEvent.hover(hoverButton);
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Disabled Button",
  disabled: true,
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const disabledButton = canvas.getByTestId("ButtonElement");
  await userEvent.click(disabledButton);
};
