import type { Meta, StoryObj } from '@storybook/react';
import HeroSection from '../../../components/HeroSection';

const meta: Meta<typeof HeroSection> = {
    title: "Hero/Hero",
    component: HeroSection,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};