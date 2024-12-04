import type { Meta, StoryObj } from '@storybook/react';
import DateTimeSection from '../../../components/cards/DateTimeSection';

const meta: Meta<typeof DateTimeSection> = {
    title: "Card Section/Date Time",
    component: DateTimeSection,
    parameters: {
        layout:"centered",
      },
} satisfies Meta<typeof DateTimeSection>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        dateTime: "30 Dec, 1pm"
    }
};