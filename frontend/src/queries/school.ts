import axios from "axios";

export const getAllSchools = () =>
  axios.get('http:localhost:3001/school').then(res => res.data);

