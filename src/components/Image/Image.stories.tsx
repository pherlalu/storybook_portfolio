import { StoryFn, Meta } from "@storybook/react";
import { Image } from "./Image";
import { ImageProps } from "./Image.types";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    // New argTypes for the controls
    size: { control: "number" },
    bgColor: { control: "color" },
    hidden: { control: "boolean" },
  },
} as Meta;

const Template: StoryFn<ImageProps> = (args) => (
  <Image bgColor={""} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: "https://via.placeholder.com/150",
  alt: "Placeholder Image",
  disabled: false,
  size: 150,
  hidden: false,
};

export const Hover = Template.bind({});
Hover.args = {
  ...Default.args,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};
