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
        label: "Register",
        buttonType: "nav",
        buttonColor: "blue"
    }
}

export const NavRegister: Story = {
    args: {
        label: "Register",
        buttonType: "nav",
        buttonColor: "blue"
    }
}

export const NavSignOut: Story = {
    args: {
        label: "Sign out",
        buttonType: "nav",
        buttonColor: "blue"
    }
}

export const NavSignin: Story = {
    args: {
        label: "Sign in",
        buttonType: "nav",
        buttonColor: "white"
    }
}

export const LandingSignin: Story = {
    args: {
        label: "Sign in",
        buttonType: "landing",
        buttonColor: "white"
    }
}

export const LandingRegister: Story = {
    args: {
        label: "Register",
        buttonType: "landing",
        buttonColor: "blue"
    }
}