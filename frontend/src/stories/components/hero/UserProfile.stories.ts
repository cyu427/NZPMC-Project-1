import type { Meta, StoryObj } from '@storybook/react';
import UserProfile from '../../../components/hero/UserProfileCard';

const meta: Meta<typeof UserProfile> = {
    title: "Hero/User Profile",
    component: UserProfile,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};