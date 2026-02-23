
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import NotFound from './pages/NotFound/NotFound';

import ProtectedRoute from './components/auth/ProtectedRoute';

import DashboardPage from './pages/Dashboard/DashboardPage';
import DocListPage from './pages/Documents/DocListPage';
import DocDetailsPage from './pages/Documents/DocDetailsPage';
import FlashCardListPage from './pages/FlashCards/FlashCardListPage';
import FlashCardsPage from './pages/FlashCards/FlashCardsPage';
import QuizzTakePage from './pages/Quizz/QuizzTakePage';
import QuizzResultsPage from './pages/Quizz/QuizzResultsPage';
import ProfilePage from './pages/Profile/ProfilePage';
import { useAuth } from './context/AuthContext';


const App = () => {

  const { isAuthenticated, loading } = useAuth();
  
  if (loading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />} />

          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />

          {/* ProtectedRoutes */}
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<DashboardPage />} />
            <Route path='/documents' element={<DocListPage />} />
            <Route path='/documents/:id' element={<DocDetailsPage />} />
            <Route path='/flashcards' element={<FlashCardListPage />} />
            <Route path='/documents/:id/flashcards' element={<FlashCardsPage />} />
            <Route path='/quizzes/:quizId' element={<QuizzTakePage />} />
            <Route path='/quizzes/:quizId/results' element={<QuizzResultsPage />} />
            <Route path='/profile' element={<ProfilePage />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App
