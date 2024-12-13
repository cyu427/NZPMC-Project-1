import axios from "axios";

export const getAllUsers = () =>
    axios.get('http://localhost:3001/admin-user').then(res => res.data.users);

export const getUserByEvent = (eventId: string) =>
    axios.get(`http://localhost:3001/admin-user/${eventId}`).then(res => res.data.user);