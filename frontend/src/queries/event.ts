import axios from "axios";

export const getAllEvents = () =>
  axios.get('http://localhost:3001/event').then(res => res.data.events);

export const joinEvent = (eventId: string, userId: string) =>
  axios.post(`http://localhost:3001/event/${eventId}/${userId}`).then(res => res.data);

export const getEvent = (eventId: string) =>
  axios.get(`http://localhost:3001/event/${eventId}`).then(res => res.data.event);

export const getEventByUser = (userId: string) =>
  axios.get(`http://localhost:3001/event/user/${userId}`).then(res => res.data.event);