import { BrowserRouter, Route, Routes } from 'react-router-dom';

import BeforeLoginMainPage from './pages/BeforeLoginMainPage';
import LoginPage from './pages/LoginPage';
import QuestionDetailPage from './pages/Question/DetailPage/QuestionDetailPage';
import QuestionWritePage from './pages/Question/WritePage/QuestionWritePage';
import React from 'react';
import SignUpPage from './pages/SignUpPage';

const RouteProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <BrowserRouter>
      {children}
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/members/signup" element={<SignUpPage />} />
        <Route path="/" element={<BeforeLoginMainPage />} />
        <Route path="/questions" element={<QuestionWritePage />} />
        <Route path="/questions/:id" element={<QuestionDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteProvider;
