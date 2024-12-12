import axios from "axios";
import { SignInData } from "../schema/apiDataValidation/newAccountSchema";

export const signIn = (user: SignInData) =>
  axios.post('http://localhost:3001/user-auth/signIn', user).then(res => res.data);

export const signOut = (id: string) =>
  axios.post(`http://localhost:3001/user-auth/signOut/${id}`).then(res => res.data);

