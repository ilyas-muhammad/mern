import { ObjectId } from 'mongoose';
import Schedule, {
  CreateScheduleInputDTO,
  ScheduleModel,
  UpdateScheduleInputDTO
} from '../models/Schedule';

const findAll = async (): Promise<ScheduleModel[]> => {
  try {
    return Schedule.find();
  } catch (error) {
    throw new Error('Error finding schedules');
  }
};

const findById = async (id: ObjectId): Promise<ScheduleModel | null> => {
  try {
    return Schedule.findById(id);
  } catch (error) {
    throw new Error('Error finding user by id');
  }
};

const update = async (
  id: ObjectId,
  update: UpdateScheduleInputDTO
): Promise<ScheduleModel | null> => {
  try {
    return Schedule.findByIdAndUpdate(id, { ...update }, { new: true });
  } catch (error) {
    throw new Error('Error updating schedule');
  }
};

const create = async (scheduleInput: CreateScheduleInputDTO): Promise<ScheduleModel> => {
  try {
    return await Schedule.create(scheduleInput);
  } catch (error) {
    throw new Error('Error creating schedule');
  }
};

const deleteById = async (id: ObjectId): Promise<boolean> => {
  try {
    Schedule.findByIdAndDelete(id);
  } catch (error) {
    throw new Error('Error deleting schedule');
  }

  return true;
};

const search = async (keyword: string): Promise<ScheduleModel[]> => {
  try {
    return Schedule.find({ $text: { $search: keyword } }, { score: { $meta: 'textScore' } }).sort({
      score: { $meta: 'textScore' }
    });
  } catch (error) {
    throw new Error('Error searching schedules');
  }
};

export default {
  update,
  findAll,
  findById,
  create,
  deleteById,
  search
};
