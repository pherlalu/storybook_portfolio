import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { userEvent, within } from "@storybook/test";
import { Hero } from "./Hero";
import styled from "styled-components";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    videoSrc: { control: "text" },
    description: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

// Custom wrapper to hide text and navbar elements
const HideElementsWrapper = styled.div`
  .typing-text,
  .navbar {
    display: none;
  }
`;

const Template: StoryFn<typeof Hero> = (args) => (
  <BrowserRouter>
    <HideElementsWrapper>
      <Hero {...args} />
    </HideElementsWrapper>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
  videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  description: "This text won't be shown",
};

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const videoElement = canvas.getByTestId("HeroVideo");
  await userEvent.hover(videoElement);
};

// New story for the disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  description: "This text won't be shown",
  disabled: true,
};

Disabled.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // Interact with the component (hover in this case)
  const noVideoImage = canvas.getByAltText("No video available");
  await userEvent.hover(noVideoImage);
};
