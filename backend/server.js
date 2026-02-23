import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import connectDB from './config/db.js';
import errorHandler from './middleware/errorHandler.js';

import authRoutes from './routes/authRoute.js';
import documentRoutes from './routes/documentRoute.js';
import flashcardRoutes from './routes/flashCardRoute.js';
import aiRoutes from './routes/aiRoute.js';
import quizRoutes from './routes/quizRoute.js';
import progressRoutes from './routes/progressRoute.js';
// ES6 module_dirname altenative

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Initialize express app

const app = express();

//Connect DB

connectDB();

// middleware to handle cors

app.use(
    cors(
        {
            origin: "*",
            methods: ["GET", "POST", "PUT", "DELETE"],
            allowedHeaders: ['content-Type', "Authorization"],
            credentials: true
        }
    )
);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static folder for uploads

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

//Routes
app.use('/api/auth', authRoutes);
app.use('/api/documents', documentRoutes);
app.use('/api/flashcards', flashcardRoutes);
app.use('/api/ai', aiRoutes);
app.use('/api/quizzes', quizRoutes);
app.use('/api/progress', progressRoutes);

app.use(errorHandler);
// 404 handler


app.use((req, res) => {
    res.status(404).json({
        success: false,
        error: 'Route not found',
        statusCode: 404
    });
});

// Server Start

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server Running in ${process.env.NODE_ENV} mode on port ${PORT}`);

});

process.on('unhandledRejection', (err) => {
    console.error(`Error: ${err.message}`);
    process.exit(1);
});