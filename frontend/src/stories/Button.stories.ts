import type { Meta, StoryObj } from '@storybook/react';
import NavButton from "../components/buttons/NavButton";

const meta: Meta<typeof NavButton> = {
    title: "NavButton",
    component: NavButton,
    parameters: {
        layout:"centered",
      },
} satisfies Meta<typeof NavButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: { 
        buttonType: "register" 
    }
}

export const Signin: Story = {
    args: { buttonType: "signin" }
}

export const Signout: Story = {
    args: { buttonType: "signout" }
}