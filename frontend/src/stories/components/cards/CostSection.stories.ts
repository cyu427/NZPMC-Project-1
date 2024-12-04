import type { Meta, StoryObj } from '@storybook/react';
import CostSection from '../../../components/cards/CostSection';

const meta: Meta<typeof CostSection> = {
    title: "Card Section/Cost",
    component: CostSection,
    parameters: {
        layout:"centered",
      },
} satisfies Meta<typeof CostSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        cost: "13.50"
    }
};