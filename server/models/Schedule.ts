import mongoose, { Schema, Document } from 'mongoose';

export interface ScheduleModel extends Document {
  name: string;
  description: string;
  dueAt: Date;
}

export interface CreateScheduleInputDTO {
  name: string;
  description: string;
  dueAt: Date;
}

export type UpdateScheduleInputDTO = Partial<CreateScheduleInputDTO>;

const ScheduleModelSchema: Schema = new Schema({
  _id: { type: Schema.Types.ObjectId, required: true, auto: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  dueAt: { type: Date, required: true }
});

// Create a text index on title and description fields
ScheduleModelSchema.index({ name: 'text', description: 'text' });

export default mongoose.model<ScheduleModel>('Schedule', ScheduleModelSchema);
