import type { Meta, StoryObj } from '@storybook/react';
import CalendarIcon from "../../../components/icons/CalendarIcon";

const meta: Meta<typeof CalendarIcon> = {
    title: "Icon/Calendar Icon",
    component: CalendarIcon,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};