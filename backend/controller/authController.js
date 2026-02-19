import jwt from 'jsonwebtoken';
import User from '../models/User';


// Generate JWT token

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE || "7d"
    })
}

// @desc    Register new User
// @route   POST /api/auth/register
// @access  public

export const register = async (req, res, next) => {
    try {

    } catch (error) {

    }
};

// @desc    Login User
// @route   POST /api/auth/login
// @access  public

export const login = async (req, res, next) => {

}

// @desc   Get User profile
// @route   GET /api/auth/profile
// @access  Private

export const getProfile = async (req, res, next) => {

};

// @desc    Update User profile
// @route   PUT /api/auth/profile
// @access  Private

export const updateProfile = async (req, res, next) => {

};

// @desc    Change Password
// @route   POST /api/auth/change-password
// @access  Private

export const changePassword = async (req, res, next) => {

};