import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';

import userRepository from '../repositories/userRepository';

export const userController = {
  get: async (req: Request, res: Response) => {
    try {
        const userId = req.params.id as unknown as ObjectId;
        const user = await userRepository.findById(userId);
       res.json({ 
            data: user,
            message: 'OK'
        });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  },

  list: async (_: Request, res: Response) => {
    try {
        const users = await userRepository.findAll();
       res.json({ 
            data: users,
            message: 'OK'
        });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  },

  post: async (req: Request, res: Response) => {
    try {
        const { name, age, email } = req.body;
        const user = await userRepository.create({ name, age, email });
       res.json({ 
            data: user,
            message: 'OK'
        });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
        const id = req.params.id as unknown as ObjectId;
        await userRepository.deleteById(id);
         res.json({
                message: 'OK'
          });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  },
};
