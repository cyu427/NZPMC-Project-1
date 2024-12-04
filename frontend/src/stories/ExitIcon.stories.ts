import type { Meta, StoryObj } from '@storybook/react';
import ExitIcon from "../components/ExitIcon";

const meta: Meta<typeof ExitIcon> = {
    title: "Exit Icon",
    component: ExitIcon,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};