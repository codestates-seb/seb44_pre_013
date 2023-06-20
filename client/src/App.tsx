import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Question from './pages/Question/';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<div>Main ExamPage</div>} />
        <Route path="/question" element={<Question />} />
        <Route path="/post" element={<div>Post ExamPage</div>} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/members/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
