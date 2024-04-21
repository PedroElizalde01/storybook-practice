import React from "react";
import { SiriusTextInput } from "../components/base/SiriusTextInput/SiriusTextInput";
import { fn } from "@storybook/test";

export default {
  title: "Sirius/TextInput",
  component: SiriusTextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    // type, onChange, placeholder
    type: { control: "select", options: ["password", "text"] },
    placeholder: { control: "text" },
  },
  args: { onChange: fn() },
};

export const DefaultTextInput = {
    args: {
      type: "text",
      placeholder: "Default Text Input",
    },
  };

  export const PasswordTextInput = {
    args: {
      type: "password",
      placeholder: "Password Text Input",
    },
  };