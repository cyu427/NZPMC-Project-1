import { Router } from 'express';
import { getAllUsers, getUserByEvent } from '../controller/adminUserController';

const adminUserRoute = Router();

adminUserRoute.route('/')
    .get(getAllUsers);
    

adminUserRoute.route('/:eventId')
    .get(getUserByEvent);

export default adminUserRoute;