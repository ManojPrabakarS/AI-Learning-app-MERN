import express from 'express';
import {
    getFlashcards,
    getAllFlashcardSets,
    reviewflashcard,
    toggleStarFlashcard,
    deleteFlashcardset
} from '../controller/flashCardController.js';

import protect from '../middleware/auth.js'

const router = express.Router();

router.use(protect);

router.get('/', getAllFlashcardSets);
router.get('/:documentId', getFlashcards);
router.post('/:cardId/review', reviewflashcard);
router.put('/:cardId/star', toggleStarFlashcard);
router.delete('/:id', deleteFlashcardset);


export default router;