import type { Meta, StoryObj } from '@storybook/react';
import AuthorisationButton from "../components/buttons/AuthorisationButton";

const meta: Meta<typeof AuthorisationButton> = {
    title: "NavButton",
    component: AuthorisationButton,
    parameters: {
        layout:"centered",
      },
} satisfies Meta<typeof AuthorisationButton>;

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