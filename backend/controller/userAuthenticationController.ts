import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User, { IUser } from '../model/user.model';

export const signIn = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body;
    
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            res.status(401).json({ message: 'Invalid credentials' });
            return;
        }

        // Update user's sign-in status
        user.isSignedIn = true;
        await user.save();

        res.status(200).json({
            message: 'User signed in successfully',
        });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

export const signOut = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;

        // Find user and update `isSignedIn` status to false
        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { isSignedIn: false },
            { new: true }
        );

        if (!updatedUser) {
            res.status(404).json({ message: 'User not found.' });
            return;
        }

        // Respond with success
        res.status(200).json({
            message: 'User signed out successfully.',
            user: {
                id: updatedUser.id,
                email: updatedUser.email,
                isSignedIn: updatedUser.isSignedIn,
            },
        });
    } catch (error) {
    }
}

