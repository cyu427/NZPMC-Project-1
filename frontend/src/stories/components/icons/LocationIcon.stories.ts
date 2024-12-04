import type { Meta, StoryObj } from '@storybook/react';
import LocationIcon from "../../../components/icons/LocationIcon";

const meta: Meta<typeof LocationIcon> = {
    title: "Icon/Location Icon",
    component: LocationIcon,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};