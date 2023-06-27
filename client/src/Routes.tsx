import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BeforeLoginMainPage from './pages/BeforeLoginMainPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import QuestionWritePage from './pages/Question/WritePage/QuestionWritePage';
import QuestionDetailPage from './pages/Question/DetailPage/QuestionDetailPage';
import QuestionModifyPage from './pages/Question/DetailPage/QuestionModifyPage';

const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/" element={<BeforeLoginMainPage />} />
        <Route path="/questions" element={<QuestionWritePage />} />
        <Route path="/questions/:questionId" element={<QuestionDetailPage />} />
        <Route path="/questions/modify/:questionId" element={<QuestionModifyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteProvider;
