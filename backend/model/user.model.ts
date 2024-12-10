import mongoose, { Document, Model } from 'mongoose';
import { ISchool } from './school.model';
import { IEvent } from './event.model';

export interface IUser extends Document {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    homeSchooled: boolean;
    school?: ISchool['_id'];
    event: IEvent['_id'][];
    isSignedIn: boolean;
    
}

const userSchema = new mongoose.Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    homeSchooled: { type: Boolean, required: true },
    school: { type: String, required: true },
    event: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Event' }],
    isSignedIn: Boolean
});

userSchema.set('toJSON', {
  transform: (_document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const User: Model<IUser> = mongoose.model<IUser>('User', userSchema);

export default User;

