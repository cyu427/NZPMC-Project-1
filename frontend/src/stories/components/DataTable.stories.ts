import type { Meta, StoryObj } from '@storybook/react';
import DataTable from '../../components/databaseTable';

const meta: Meta<typeof DataTable> = {
    title: "Table",
    component: DataTable,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};