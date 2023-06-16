import { BrowserRouter, Routes, Route } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import Question from './pages/Question/';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<div>Main ExamPage</div>} />
        <Route path="/question" element={<Question />} />
        <Route path="/post" element={<div>Post ExamPage</div>} />
        <Route path="/auth/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
