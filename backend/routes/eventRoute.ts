import { Router } from 'express';
import { getAllEvents, getEvent, getEventByUser, getEventsUserNotJoined, joinEvent } from '../controller/eventController';

const eventRoute = Router();

eventRoute.route('/')
    .get(getAllEvents);

eventRoute.route('/:eventId')
    .get(getEvent);

eventRoute.route('/user/:userId')
    .get(getEventByUser);

eventRoute.route('/:eventId/:userId')
    .post(joinEvent);

eventRoute.route('/user/notJoined/:userId')
    .get(getEventsUserNotJoined);

export default eventRoute;