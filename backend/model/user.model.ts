import mongoose, { Document, Model } from 'mongoose';
import { ISchool } from './school.model';
import { IEvent } from './event.model';

export interface IUser extends Document {
    email: string;
    password: string;
    fname: string;
    lname: string;
    isHomeSchooled: boolean;
    school?: ISchool['_id'];
    event: IEvent['_id'][];
    isSignedIn: boolean;
    
}

const userSchema = new mongoose.Schema<IUser>({
    email: { type: String, required: true },
    password: { type: String, required: true },
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    isHomeSchooled: { type: Boolean, required: true },
    school: { type: mongoose.Schema.Types.ObjectId, ref: 'School' },
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

