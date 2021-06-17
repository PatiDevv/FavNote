import React from "react";
import Button from "./Button";

export default {
  title: "FAV-NOTE/Button",
  component: Button,
  argTypes: {},
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  secondary: true,
  label: "Button",
};
