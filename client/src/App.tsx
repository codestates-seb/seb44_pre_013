import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Question from './pages/Question/WritePage';
import QuestionDetail from './pages/Question/DetailPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/members/signup" element={<SignUpPage />} />
        <Route path="/questions" element={<Question />} />
        <Route path="/questions/:id" element={<QuestionDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
