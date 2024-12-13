import { Request, Response } from 'express';
import Event from '../model/event.model';
import User, { IUser } from '../model/user.model';

export const getAllEvents = async (req: Request, res: Response) => {
    try {
      // Find all events in the database
      const events = await Event.find();
  
        // Return the events
        res.status(200).json({
            message: 'Events fetched successfully.',
            events,
        });
    } catch (error) {
      console.error('Error fetching events:', error);
    }
};

export const getEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { eventId } = req.params;

        // Find event by ID
        const event = await Event.findById(eventId);

        if (!event) {
            res.status(404).json({ message: 'Event not found.' });
            return;
        }

        // Return the event
        res.status(200).json({
            message: 'Event fetched successfully.',
            event,
        });
    } catch (error) {
        console.error('Error fetching event:', error);
    }
};

export const joinEvent = async (req: Request, res: Response): Promise<void> => {
    const { eventId, userId } = req.params;
    
    try {
        // Check if the event exists
        const event = await Event.findById(eventId);
        if (!event) {
            res.status(404).json({ message: 'Event not found' });
            return;
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }

        // Check if user is already in the event
        if (event.users?.includes(user._id)) {
            res.status(400).json({ message: 'User already joined event' });
            return;
        }
        
        // Add the user to the event
        event.users = event.users || [];
        event.users.push(user._id);
        
        // Add the event to the user
        user.event = user.event || [];
        user.event.push(event._id);

        // Save the updated event and user
        await event.save();
        await user.save();

        res.status(200).json({
            message: 'User successfully joined the event',
            event,
            user
          });

    } catch (error) {
        console.error('Error joining event:', error);
    }
};

export const getEventByUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params;

        // Find event by user ID
        const event = await Event.find({ users: userId });

        // if (!event) {
        //     res.status(404).json({ message: 'Event not found.' });
        //     return;
        // }

        // Return the event
        res.status(200).json({
            message: 'Event fetched successfully.',
            event,
        });
    } catch (error) {
        console.error('Error fetching event:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}