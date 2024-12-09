import { Request, Response } from 'express';
import Event from '../model/event.model';
import User, { IUser } from '../model/user.model';

export const createEvent = async (req: Request, res: Response) => {
    try {
        const { name, dateTime, location, cost, description } = req.body;

        // Create new event
        const newEvent = new Event({
            name,
            dateTime,
            location,
            cost,
            description,
        });

        // Save event to database
        await newEvent.save();

        res.status(201).json({
            message: 'Event created successfully',
            event: newEvent,
        });
    } catch (error) {
        console.error('Error creating event:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const updateEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { eventId } = req.params;
        const { name, dateTime, location, cost, description } = req.body;

        // Find event by ID
        const updatedEvent = await Event.findByIdAndUpdate(
            eventId,
            { name, dateTime, location, cost, description },
            { new: true }
        );

        if (!updatedEvent) {
            res.status(404).json({ message: 'Event not found.' });
            return;
        }

        res.status(200).json({
            message: 'Event updated successfully.',
            event: updatedEvent,
        });
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const deleteEvent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { eventId } = req.params;

        // Find event by ID
        const deletedEvent = await Event.findByIdAndDelete(eventId);

        if (!deletedEvent) {
            res.status(404).json({ message: 'Event not found.' });
            return;
        }

        res.status(200).json({
            message: 'Event deleted successfully.',
            event: deletedEvent,
        });
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}