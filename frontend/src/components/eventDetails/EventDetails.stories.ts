import type { Meta, StoryObj } from '@storybook/react';
import EventDetailTest from './EventDetailsTest';

const meta: Meta<typeof EventDetailTest> = {
    title: "Page/Event Details",
    component: EventDetailTest,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};