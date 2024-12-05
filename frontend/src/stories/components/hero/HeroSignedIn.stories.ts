import type { Meta, StoryObj } from '@storybook/react';
import HeroSignedIn from '../../../components/hero/HeroSignedIn';

const meta: Meta<typeof HeroSignedIn> = {
    title: "Hero/Signed In",
    component: HeroSignedIn,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};