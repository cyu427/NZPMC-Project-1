import mongoose, { Document, Model } from 'mongoose';

export interface ISchool extends Document {
    school: string;
    eqi: number;
}

const schoolSchema = new mongoose.Schema<ISchool>({
    school: String,
    eqi: Number,
});

schoolSchema.set('toJSON', {
  transform: (_document: any, returnedObject: any) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  }
});

const School: Model<ISchool> = mongoose.model<ISchool>('School', schoolSchema);

export default School;

