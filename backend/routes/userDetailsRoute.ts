import e, { Router } from 'express';
import { createUser, editUserName, getUser } from '../controller/userDetailController';

const userDetailsRoute = Router();

userDetailsRoute.route('/')
    .post(createUser);
    

userDetailsRoute.route('/:userId')
    .get(getUser)
    .put(editUserName);

export default userDetailsRoute;