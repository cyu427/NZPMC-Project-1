import { Router } from 'express';
import { createEvent, deleteEvent, updateEvent } from '../controller/adminEventController';
import { getAllSchools, getSchool } from '../controller/schoolController';

const schoolRoute = Router();

schoolRoute.route('/')
    .get(getAllSchools);

schoolRoute.route('/:schoolId')
    .get(getSchool);

export default schoolRoute;