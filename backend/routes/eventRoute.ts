import { Router } from 'express';
import { getAllEvents, getEvent, getEventByUser, joinEvent } from '../controller/eventController';

const eventRoute = Router();

eventRoute.route('/')
    .get(getAllEvents);

eventRoute.route('/:eventId')
    .get(getEvent);

eventRoute.route('/user/:userId')
    .get(getEventByUser);

eventRoute.route('/:eventId/:userId')
    .post(joinEvent);

export default eventRoute;