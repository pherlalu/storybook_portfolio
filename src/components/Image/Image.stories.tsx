import { StoryFn, Meta } from "@storybook/react";
import { Image } from "./Image";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    size: { control: "number" },
    bgColor: { control: "color" },
    hidden: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<typeof Image> = (args) => (
  <Image {...args} data-testid="ImageElement" />
);

export const Default = Template.bind({});
Default.args = {
  src: "https://talentclick.com/wp-content/uploads/2021/08/placeholder-image.png",
  alt: "Placeholder Image",
  disabled: false,
  size: 150,
  hidden: false,
};
Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByTestId("ImageElement");
  await userEvent.click(imageElement);
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};
Hover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByTestId("ImageElement");
  await userEvent.hover(imageElement);
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const imageElement = canvas.getByTestId("ImageElement");
  await userEvent.click(imageElement);
};
