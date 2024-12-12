import axios from "axios";

export const getAllUsers = () =>
    axios.get('http://localhost:3001/admin-user').then(res => res.data.users);