import React from "react";
import { Typography } from "antd";
import { SiriusCard } from "../components/base/SiriusCard/SiriusCard";
import { fn } from "@storybook/test";

//children, title, bordered, style

const exampleText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elementum tortor diam, sed accumsan dolor consectetur vel. Ut ultrices, nibh et hendrerit pharetra, magna odio pellentesque elit, ut tincidunt libero ligula vitae diam.";

export default {
  title: "Sirius/Card",
  component: SiriusCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    bordered: { control: "boolean" },
    style: { control: "object" },
  },
};

export const BasicCard = {
  args: {
    children: exampleText,
    title: "Basic Card",
    bordered: true,
    style: { },
  },
};

export const CardWithoutTitle = {
  args: {
    children: exampleText,
    bordered: true,
    style: { },
  },
};

export const CardWithoutBorder = {
  args: {
    children: exampleText,
    title: "Card Without Border",
    bordered: false,
    style: { },
  },
};

export const CustomStyledCard = {
  args: {
    children: exampleText,
    title: "Custom Styled Card",
    bordered: true,
    style: { width: 400, backgroundColor: "#e0b5f0", borderColor: '#000000' },
  },
};
