import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import QuestionWritePage from './pages/Question/WritePage/QuestionWritePage';
import QuestionDetailPage from './pages/Question/DetailPage/QuestionDetailPage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/members/signup" element={<SignUpPage />} />
        <Route path="/questions" element={<QuestionWritePage />} />
        <Route path="/questions/:id" element={<QuestionDetailPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
