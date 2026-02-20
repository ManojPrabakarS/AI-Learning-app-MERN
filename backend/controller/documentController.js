import Document from '../models/Document.js';
import Flashcard from '../models/FlashCard.js';
import Quiz from '../models/Quiz.js';

import { extractTextFromPDF } from '../utils/pdfParser.js';
import { chunkText } from '../utils/textChunker.js';
import fs from 'fs/promises';
import mongoose from 'mongoose';

// @desc   Upload PDF Document
// @route   POST /api/documents/upload
// access   Private

export const uploadDocument = async (req, res, next) => {
    try {

    } catch (error) {
        if (req.file) {
            await fs.unlink(req.file.path).catch(() => { });
        }
        next(error);
    }
};


// @desc    Get all user Documents
// @route   GET /api/documents
// access   Private

export const getDocuments = async (req, res, next) => {

};

// @desc    Get Single doc with chunks
// @route   GET /api/documents/:id
// access   Private

export const getDocument = async (req, res, next) => {

};


// @desc    Delete Doc
// @route   DELETE /api/documents/:id
// access   Private

export const deleteDocument = async (req, res, next) => {

};


// @desc    Update Document title
// @route   PUT /api/documents/:id
// access   Private

export const updateDocument = async (req, res, next) => {

};

