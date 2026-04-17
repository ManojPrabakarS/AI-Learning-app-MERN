import { useState, useEffect } from 'react';

import { Plus, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';

import quizService from '../../service/quizService';
import aiService from '../../service/aiService';

import Spinner from '../common/Spinner';
import Button from '../common/Button';
import Model from '../common/Model';
import QuizCard from './QuizCard';
import EmptyState from '../common/EmptyState';

const QuizManager = ({ documentId }) => {

    const [quizzes, setQuizzes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [generating, setGenerating] = useState(false);
    const [isGeneratedModalOpen, setIsGeneratedModelOpen] = useState(false);
    const [numQuestions, setNumQuestions] = useState(5);

    const [isDeleteModelOpen, setIsDeleteModelOpen] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [selectedQuiz, setSelectedQuiz] = useState(null);


    const fetchQuizzes = async () => {
        setLoading(true);

        try {
            const data = await quizService.getQuizzesForDocument(documentId);
            setQuizzes(data.data);
        } catch (error) {
            toast.error('Failed to fetch quizess...')
            console.error(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        if (documentId) {
            fetchQuizzes();
        }
    }, [documentId]);


    const handleGenerateQuiz = async (e) => {
        e.preventDefault();
        setGenerating(true);

        try {
            await aiService.generateQuiz(documentId, { numQuestions });
            toast.success("Quizzes Generated Successfully...");
            fetchQuizzes();
        } catch (error) {
            toast.error(error.message || 'Failed to generate quiz...')
        } finally {
            setGenerating(false)
            setIsGeneratedModelOpen(false)
        }
    };

    const handleDeleteRequest = (quiz) => {
        setSelectedQuiz(quiz);
        setIsDeleteModelOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedQuiz) return;
        setDeleting(true);

        try {
            await quizService.deleteQuiz(selectedQuiz._id);
            toast.success(`'${selectedQuiz.title || 'Quiz'}' deleted.`);
            setIsDeleteModelOpen(false);
            setSelectedQuiz(null);
            setQuizzes(quizzes.filter(q => q._id !== selectedQuiz._id));
        } catch (error) {
            toast.error(error.message || 'Failed to delele quiz.');
        } finally {
            setDeleting(false);
        }
    };

    const renderQuizContent = () => {
        if (loading) {
            return <Spinner />
        }

        if (quizzes.length === 0) {
            return (
                <EmptyState title='No Quizzes Yet' description='Generate a quiz from your document' />
            )
        }

        return (
            <>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {quizzes.map((quiz) => (
                        <QuizCard key={quiz._id} quiz={quiz} onDelete={handleDeleteRequest} />
                    ))}
                </div>
            </>
        )
    };

    return (
        <>
            <div className='bg-white border border-neutral-200 rounded-lg p-6'>
                <div className='flex justify-end gap-2 mb-4'>
                    <Button onClick={() => setIsGeneratedModelOpen(true)}>
                        <Plus size={18} />
                        Generate Quiz
                    </Button>
                </div>

                {renderQuizContent()}

                {/* Generate Quiz */}
                <Model
                    isOpen={isGeneratedModalOpen}
                    onClose={() => setIsGeneratedModelOpen(false)}
                    title="Generate New Quizzes"
                >
                    <form onSubmit={handleGenerateQuiz} className='space-y-4'>
                        <div>
                            <label className='block text-xs font-medium text-neutral-700 mb-1.5'>
                                Number of Questions
                            </label>
                            <input
                                type='number'
                                value={numQuestions}
                                onChange={(e) => setNumQuestions(Math.max(1, parseInt(e.target.value) || 1))}
                                min='1'
                                required
                                className='w-full h-9 px-3 border border-neutral-200 rounded-lg bg-white text-sm text-neutral-900 placeholder-neutral-400 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#b86bef] focus:border-transparent'
                            />
                        </div>
                        <div className='flex justify-end gap-2 pt-2'>
                            <Button
                                type='button'
                                variant='secondary'
                                onClick={() => setIsGeneratedModelOpen(false)}
                                disabled={generating}

                            >
                                Cancel
                            </Button>
                            <Button type='submit' disabled={generating}>
                                {generating ? 'Generating...' : 'Generate'}
                            </Button>
                        </div>
                    </form>

                </Model>


                {/* Delete Confirmation */}
                <Model
                    isOpen={isDeleteModelOpen}
                    onClose={() => setIsDeleteModelOpen(false)}
                    title="Confirm Delete Quiz"
                >
                    <div className='space-y-4'>
                        <p className='text-sm text-neutral-600'>
                            Are you sure you want to delete the quiz:<span className='font-semibold text-neutral-900'>{selectedQuiz?.title || 'this quiz'}</span>? This action cannot be undone.
                        </p>
                        <div className='flex justify-end gap-2 pt-2'>
                            <Button
                                type='button'
                                variant='outline'
                                onClick={() => setIsDeleteModelOpen(false)}
                                disabled={deleting}
                            >
                                Cancel
                            </Button>
                            <Button
                                onClick={handleConfirmDelete}
                                disabled={deleting}
                                className='bg-red-500 hover:bg-red-600 active:bg-red-700 focus:ring-red-500'
                            >
                                {deleting ? 'Deleting...' : 'Delete'}
                            </Button>
                        </div>
                    </div>

                </Model>
            </div>
        </>
    )
}

export default QuizManager
