import type { Meta, StoryObj } from '@storybook/react';
import EventCard from "../../../components/cards/Card";

const meta: Meta<typeof EventCard> = {
    title: "Card/Card",
    component: EventCard,
    parameters: {
        layout:"centered",
      },
} satisfies Meta<typeof EventCard>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
      title: "NZPMC Round 1",
      date: "5 Dec, 6pm",
      location: "University of Auckland",
      cost: "13.50",
      primaryButtonLabel: "More Info",
      secondaryButtonLabel: "Sign in to Join"
  }
};