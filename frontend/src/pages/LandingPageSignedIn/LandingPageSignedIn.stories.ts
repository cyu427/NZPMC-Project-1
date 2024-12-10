import type { Meta, StoryObj } from '@storybook/react';
import LandingPageSignedIn from './LandingPageSignedIn';

const meta: Meta<typeof LandingPageSignedIn> = {
    title: "Page/Landing Signed In",
    component: LandingPageSignedIn,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};