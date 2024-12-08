import type { Meta, StoryObj } from '@storybook/react';
import EventInfo from '../../../components/eventDetails/EventInfo';

const meta: Meta<typeof EventInfo> = {
    title: "Event/Event Details",
    component: EventInfo,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};