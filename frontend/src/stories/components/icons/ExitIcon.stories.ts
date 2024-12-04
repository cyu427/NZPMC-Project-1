import type { Meta, StoryObj } from '@storybook/react';
import ExitIcon from "../../../components/icons/ExitIcon";

const meta: Meta<typeof ExitIcon> = {
    title: "Icon/Exit Icon",
    component: ExitIcon,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};