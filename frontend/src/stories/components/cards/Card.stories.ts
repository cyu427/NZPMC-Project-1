import type { Meta, StoryObj } from '@storybook/react';
import MediaCard from "../../../components/cards/Card";

const meta: Meta<typeof MediaCard> = {
    title: "Card/Card",
    component: MediaCard,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};