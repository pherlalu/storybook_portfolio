import { Meta, StoryFn } from "@storybook/react";
import { Card } from "./Card";
import { CardProps } from "./Card.types";

const meta: Meta = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    backgroundColor: {
      control: "color",
    },
    titleColor: {
      control: "color",
    },
    descriptionColor: {
      control: "color",
    },
    hidden: {
      control: "boolean",
    },
  },
};

export default meta;
const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Sed ut perspiciatis unde omnis",
  content:
    "DNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  image:
    "https://th.bing.com/th/id/OIP.gqM6Q75Z6RO1jvvf1k4oHgHaE8?rs=1&pid=ImgDetMain",
};

export const Disabled = Template.bind({});
Disabled.args = {
  title: "Sed ut perspiciatis unde omnis",
  content:
    "DNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  disabled: true,
  image:
    "https://th.bing.com/th/id/OIP.gqM6Q75Z6RO1jvvf1k4oHgHaE8?rs=1&pid=ImgDetMain",
};
