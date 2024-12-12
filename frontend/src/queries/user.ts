import axios from "axios";
import { AccountFormData } from "../schema/apiDataValidation/newAccountSchema";

export const createAccount = (newAccount: AccountFormData) =>
  axios.post('http://localhost:3001/user-details', newAccount)

export const getUserDetails = (userId: string) =>
  axios.get(`http://localhost:3001/user-details/${userId}`).then(res => res.data.user)

export const editName = (userId: string, firstName: string, lastName: string) =>
  axios.put(`http://localhost:3001/user-details/${userId}`, { firstName, lastName })

