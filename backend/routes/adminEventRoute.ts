import { Router } from 'express';
import { createEvent, deleteEvent, updateEvent } from '../controller/adminEventController';

const adminEventRoute = Router();

adminEventRoute.route('/')
    .post(createEvent);
    

adminEventRoute.route('/:eventId')
    .put(updateEvent)
    .delete(deleteEvent);

export default adminEventRoute;