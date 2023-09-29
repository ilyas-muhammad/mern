import * as fs from 'fs';
import * as Papa from 'papaparse';

import User from '../models/User';
import connectDB from '../config/db';

connectDB();

const insertDataToMongo = async (data: any[]) => {
  try {
    await User.insertMany(data);
    console.log('Data inserted into MongoDB.');
  } catch (error) {
    console.error('Error inserting data into MongoDB:', error);
  }
};

const filePath = 'imports/users.csv';
fs.readFile(filePath, 'utf-8', (err, fileData) => {
  if (err) {
    console.error('Error reading CSV file:', err);
    return;
  }

  Papa.parse(fileData, {
    header: true,
    dynamicTyping: true,
    complete: (parsedData) => {
      if (parsedData?.data) {
        const parsedRows = parsedData.data;
        insertDataToMongo(parsedRows);
      } else {
        console.error('Error parsing CSV data.');
      }
    }
  });
});
