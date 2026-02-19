import express, { Router } from 'express'
import { body } from 'express-validator'

import { register, login, getProfile, updateProfile, changePassword } from '../controller/authController.js'

import protect from '../middleware/auth.js';

const router = express.Router();

// Validation middleware

const registerValidation = [
    body('username').trim().isLength({ min: 3 }).withMessage('Username must be atleast 3 characters'),
    body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be atleast 6 characters')
];

const loginValidation = [
    body('email').isEmail().normalizeEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().withMessage('Password is required')
];


// Public routes

router.post('/register', registerValidation, register);
router.post('./login', loginValidation, login);

// protected routes

router.get('/profile', protect, getProfile);
router.get('/profile', protect, updateProfile);
router.get('/change-password', protect, changePassword);

export default router;