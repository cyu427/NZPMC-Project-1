import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import User, { IUser } from '../model/user.model';

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email, password, firstName, lastName, homeSchooled, school } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        res.status(400).json({ message: 'User already exists' });
        return;
      }
  
      // Hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // Create new user
      const newUser: IUser = new User({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        homeSchooled,
        school,
        isSignedIn: false
      });
  
      // Save user to database
      await newUser.save();
  
      // Remove password from response
      const userResponse = newUser.toObject();
      delete userResponse.password;
  
      res.status(201).json({
        message: 'User created successfully',
        user: userResponse
      });
    } catch (error) {
      console.error('Error creating user:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
};

export const getUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { userId } = req.params; 
  
      // Find user by ID
      const user = await User.findById(userId);
  
      if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
      }
  
      // Return the user's details
      res.status(200).json({
        message: 'User found successfully.',
        user: {
          id: user.id,
          email: user.email,
          fname: user.firstName,
          lname: user.lastName,
          isHomeSchooled: user.homeSchooled,
          school: user.school,
          isSignedIn: user.isSignedIn,
        },
      });
    } catch (error) {
    }
};

export const editUserName = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;
        const { firstName, lastName } = req.body;

        // Validate input
        if (!firstName || !lastName) {
            res.status(400).json({ message: 'First name and last name are required.' });
            return;
        }

        // Find user and update `fname` and `lname` fields
        const editedUser = await User.findByIdAndUpdate(
            userId,
            { firstName, lastName },
            { new: true, runValidators: true } // Return the updated document and run validations
        );

        if (!editedUser) {
            res.status(404).json({ message: 'User not found.' });
            return;
        }

        // Send response with updated user details
        res.status(200).json({
            message: 'User details updated successfully.',
            user: {
                id: editedUser.id,
                email: editedUser.email,
                fname: editedUser.firstName,
                lname: editedUser.lastName,
            },
        }); 
    } catch (error) {}
}