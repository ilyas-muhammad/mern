import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import apiRoutes from './routes/api';
import uploadRoutes from './routes/upload';
import loggerMiddleware from './middleware/logger';

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(loggerMiddleware);
app.use(cors());
app.use(express.json());

// API routes
app.use('/api', apiRoutes);
app.use('/upload', uploadRoutes);

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
