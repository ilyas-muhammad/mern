import { ObjectId } from 'mongoose';
import User, { CreateUserInputDTO, UserModel } from '../models/User';

const findAll = async (): Promise<UserModel[]> => {
  try {
    return User.find();
  } catch (error) {
    throw new Error('Error finding users');
  }
};

const findById = async (userId: ObjectId): Promise<UserModel | null> => {
  try {
    return User.findById(userId);
  } catch (error) {
    throw new Error('Error finding user by id');
  }
};

/**
 * @public
 * findUsersByAgeGreaterThanInput
 *
 * @param input number
 * @returns User array
 *
 * @example
 * findUsersByAgeGreaterThanInput(25);
 */
const findUsersByAgeGreaterThanInput = async (input: number): Promise<UserModel[]> => {
  try {
    return User.find({ age: { $gt: input } });
  } catch (error) {
    throw new Error('Error finding users by age greater than 25');
  }
};

const updateUserEmail = async (userId: ObjectId, newEmail: string): Promise<UserModel | null> => {
  try {
    return User.findByIdAndUpdate(userId, { email: newEmail }, { new: true });
  } catch (error) {
    throw new Error('Error updating user email');
  }
};

const deleteInactiveUsers = async (): Promise<boolean> => {
  try {
    User.deleteMany({ status: 'inactive' });
  } catch (error) {
    throw new Error('Error inactivating users');
  }

  return true;
};

const create = async (user: CreateUserInputDTO): Promise<UserModel> => {
  try {
    return await User.create(user);
  } catch (error) {
    throw new Error('Error creating user');
  }
};

const deleteById = async (userId: ObjectId): Promise<boolean> => {
  try {
    User.findByIdAndDelete(userId);
  } catch (error) {
    throw new Error('Error deleting user');
  }

  return true;
};

export default {
  findUsersByAgeGreaterThanInput,
  updateUserEmail,
  deleteInactiveUsers,
  findAll,
  findById,
  create,
  deleteById
};
