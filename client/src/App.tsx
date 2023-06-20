import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import Question from './pages/Question';
import SignUpPage from './pages/SignUpPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/members/signup" element={<SignUpPage />} />
        <Route path="/questions" element={<Question />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
