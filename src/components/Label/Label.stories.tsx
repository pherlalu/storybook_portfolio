import type { Meta, StoryFn } from "@storybook/react";
import { Label } from "./Label";
import { userEvent, within } from "@storybook/test";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: { control: "color" },
    backgroundColor: { control: "color" },
    disabled: { control: "boolean" },
    hidden: { control: "boolean" },
  },
};

export default meta;

const Template: StoryFn<typeof Label> = (args) => (
  <Label {...args} data-testid="LabelElement" />
);

export const Default = Template.bind({});
Default.args = {
  children: "Default Label",
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const labelElement = canvas.getByTestId("LabelElement");
  await userEvent.click(labelElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled Label",
  disabled: true,
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const disabledLabelElement = canvas.getByTestId("LabelElement");
  await userEvent.click(disabledLabelElement);
};
