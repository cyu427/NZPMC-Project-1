import { Router } from 'express';
import { signIn } from '../controller/userAuthenticationController';
import { signOut } from '../controller/userAuthenticationController';

const userAuthenticationRoute = Router();

userAuthenticationRoute.route('/signIn')
    .post(signIn);

userAuthenticationRoute.route('/signOut/:userId')
    .post(signOut);

export default userAuthenticationRoute;