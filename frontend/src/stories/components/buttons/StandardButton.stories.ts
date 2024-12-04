import type { Meta, StoryObj } from '@storybook/react';
import StandardButton from "../../../components/buttons/StandardButton";

const meta: Meta<typeof StandardButton> = {
    title: "Standard Buttons",
    component: StandardButton,
    parameters: {
        layout:"centered",
      },
} satisfies Meta<typeof StandardButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: "Register",
        buttonColor: "blue"
    }
}

export const MoreInfo: Story = {
    args: {
        label: "More Info",
        buttonColor: "white"
    }
}

export const SignInToJoin: Story = {
    args: {
        label: "Sign in to Join",
        buttonColor: "blue"
    }
}

export const Join: Story = {
    args: {
        label: "Join",
        buttonColor: "blue"
    }
}

export const Cancel: Story = {
    args: {
        label: "Cancel",
        buttonColor: "white"
    }
}

export const Back: Story = {
    args: {
        label: "< Back",
        buttonColor: "white"
    }
}

export const Next: Story = {
    args: {
        label: "Next >",
        buttonColor: "blue"
    }
}

export const Signin: Story = {
    args: {
        label: "Sign in",
        buttonColor: "blue"
    }
}

export const View: Story = {
    args: {
        label: "View",
        buttonColor: "white"
    }
}

export const Edit: Story = {
    args: {
        label: "Edit",
        buttonColor: "blue"
    }
}