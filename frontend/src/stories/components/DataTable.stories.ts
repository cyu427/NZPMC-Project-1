import type { Meta, StoryObj } from '@storybook/react';
// import DataTable from '../../components/databaseTable';
// import DataTableWithSearch from '../../components/databaseTable';
import DataTableWithSearch from '../../components/table/DataTableWithSearch';

const meta: Meta<typeof DataTableWithSearch> = {
    title: "Table",
    component: DataTableWithSearch,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};