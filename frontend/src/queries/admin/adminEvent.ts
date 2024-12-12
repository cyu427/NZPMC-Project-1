import axios from "axios";
import { CreateEventSchemaFormData } from "../../schema/formValidation/createEventSchema";

export const createEvent = (event: CreateEventSchemaFormData) =>
  axios.post('http://localhost:3001/admin-event', event).then(res => res.data);