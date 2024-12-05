import type { Meta, StoryObj } from '@storybook/react';
import HeroNotSignedIn from '../../../components/hero/HeroNotSignedIn';


const meta: Meta<typeof HeroNotSignedIn> = {
    title: "Hero/Not Signed In",
    component: HeroNotSignedIn,
    parameters: {
        layout:"centered",
      },
}
export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};