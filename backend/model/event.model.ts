import mongoose, { Document, Model } from 'mongoose';
import { IUser } from './user.model';

export interface IEvent extends Document {
    name: string;
    dateTime: Date;
    location: string;
    cost: number;
    description: string;
    users?: IUser['_id'][];
}

const eventSchema = new mongoose.Schema<IEvent>({
    name: { type: String, required: true },
    dateTime: { type: Date, required: true },
    location: { type: String, required: true },
    cost: { type: Number, required: true },
    description: String,
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
});

eventSchema.set('toJSON', {
  transform: (_document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const Event: Model<IEvent> = mongoose.model<IEvent>('Event', eventSchema);

export default Event;

