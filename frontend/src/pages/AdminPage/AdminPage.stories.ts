import type { Meta, StoryObj } from '@storybook/react';
import AdminPage from './AdminPage';  

const meta: Meta<typeof AdminPage> = {
    title: "Page/Admin Page",
    component: AdminPage,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};