import mongoose, { Schema, Document } from 'mongoose';

export interface UserModel extends Document {
  name: string;
  age: number;
  email: string;
  status: 'active' | 'inactive';
}

export interface CreateUserInputDTO {
  name: string;
  age: number;
  email: string;
}

const UserModelSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
  status: { type: String, required: true, default: 'active' },
});

export default mongoose.model<UserModel>('User', UserModelSchema);
