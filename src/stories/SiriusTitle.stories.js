import React from "react";
import { Typography } from "antd";
import { SiriusTitle } from "../components/base/SiriusTitle/SiriusTitle";
import { fn } from "@storybook/test";

export default {
  title: "Sirius/Title",
  component: SiriusTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    text: { control: "text" },
    level: { control: "select", options: ["2", "3", "4", "5"] },
  },
};

export const Level2 = {
  args: {
    title: "Level 2",
    level: 2,
  },
};

export const Level3 = {
  args: {
    title: "Level 3",
    level: 3,
  },
};

export const Level4 = {
  args: {
    title: "Level 4",
    level: 4,
  },
};

export const Level5 = {
  args: {
    title: "Level 5",
    level: 5,
  },
};
