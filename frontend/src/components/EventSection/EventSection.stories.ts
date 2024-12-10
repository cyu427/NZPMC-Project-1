import type { Meta, StoryObj } from '@storybook/react';
import EventsSection from './EventSection';

const meta: Meta<typeof EventsSection> = {
    title: "Section/Events Section",
    component: EventsSection,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};