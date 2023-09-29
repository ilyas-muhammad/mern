import { Request, Response } from 'express';
import { ObjectId } from 'mongoose';

import scheduleRepository from '../repositories/scheduleRepository';
import validateSchedule from '../commons/validate-schedule';

export const scheduleController = {
  get: async (req: Request, res: Response) => {
    try {
      const id = req.params.id as unknown as ObjectId;
      const schedule = await scheduleRepository.findById(id);
      res.json({
        data: schedule,
        message: 'OK'
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  },

  list: async (_: Request, res: Response) => {
    try {
      const schedules = await scheduleRepository.findAll();
      res.json({
        data: schedules,
        message: 'OK'
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  },

  post: async (req: Request, res: Response) => {
    try {
      const { isValid, errors } = validateSchedule(req.body);
      if (!isValid) {
        return res.status(400).json({ errors });
      }
      const user = await scheduleRepository.create(req.body);
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
      await scheduleRepository.deleteById(id);
      res.json({
        message: 'OK'
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  },

  search: async (req: Request, res: Response) => {
    try {
      const { keyword } = req.query;
      if (!keyword) {
        return res.status(400).json({ message: 'Keyword is required' });
      }

      const schedule = await scheduleRepository.search(keyword as string);
      res.json({
        data: schedule,
        message: 'OK'
      });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server Error');
    }
  }
};
