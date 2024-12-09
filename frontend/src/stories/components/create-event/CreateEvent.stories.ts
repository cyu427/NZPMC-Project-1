import type { Meta, StoryObj } from '@storybook/react';
import CreateEventGeneralFields from '../../../components/createEvent/CreateEventGeneralFields';

const meta: Meta<typeof CreateEventGeneralFields> = {
    title: "Event/Create Event General Fields",
    component: CreateEventGeneralFields,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};