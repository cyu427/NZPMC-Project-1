import type { Meta, StoryObj } from '@storybook/react';
import LocationSection from '../../../components/cards/LocationSection';

const meta: Meta<typeof LocationSection> = {
    title: "Card Section/Location",
    component: LocationSection,
    parameters: {
        layout:"centered",
      },
} satisfies Meta<typeof LocationSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        location: "University of Auckland"
    }
};