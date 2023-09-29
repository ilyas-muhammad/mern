import { CreateScheduleInputDTO } from "../models/Schedule";

interface ValidationResult {
  isValid: boolean;
  errors: string[];
}
export default function validateSchedule(schedule: CreateScheduleInputDTO): ValidationResult {
  const errors: string[] = [];

  // Check if name is present and not empty
  if (!schedule.name.trim()) {
    errors.push('Name is required.');
  }

  // Check if description is present and not empty
  if (!schedule.description.trim()) {
    errors.push('Description is required.');
  }

  // Check if date is a valid date
  const isValidDate = !isNaN(Date.parse(schedule.dueAt as unknown as string));
  if (!isValidDate) {
    errors.push('Invalid date format.');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}
