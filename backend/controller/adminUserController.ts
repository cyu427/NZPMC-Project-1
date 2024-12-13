import { Request, Response } from 'express';
import User, { IUser } from '../model/user.model';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        // Find all users in the database
        const users = await User.find();

        // Return the users
        res.status(200).json({
            message: 'Users fetched successfully.',
            users,
        });
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

export const getUserByEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { eventId } = req.params;

        // Find user by event ID
        const user = await User.find({ event: eventId });

        if (!user) {
            res.status(404).json({ message: 'User not found.' });
            return;
        }

        // Return the user
        res.status(200).json({
            message: 'User fetched successfully.',
            user,
        });
    } catch (error) {
        console.error('Error fetching user:', error);
    }
}
