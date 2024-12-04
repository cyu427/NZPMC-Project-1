import type { Meta, StoryObj } from '@storybook/react';
import Navigation from '../../components/Navigation';

const meta: Meta<typeof Navigation> = {
    title: "Page Components/Navigation",
    component: Navigation,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};