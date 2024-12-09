import { Router } from 'express';
import { getAllEvents, getEvent, joinEvent } from '../controller/eventController';

const eventRoute = Router();

eventRoute.route('/')
    .get(getAllEvents);

eventRoute.route('/:eventId')
    .get(getEvent);

eventRoute.route('/:eventId/:userId')
    .post(joinEvent);

export default eventRoute;