import type { Meta, StoryObj } from "@storybook/react";

import TestButton from "./testButton";

const meta = {
  title: "TestButton",
  component: TestButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} as Meta<typeof TestButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: "Primary Button",
    },
};