import type { Meta, StoryObj } from '@storybook/react';
import LandingPage from './LandingPage';

const meta: Meta<typeof LandingPage> = {
    title: "Page/Landing Page",
    component: LandingPage,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};