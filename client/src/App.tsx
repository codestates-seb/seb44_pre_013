import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<div>Main ExamPage</div>} />
        <Route path="/post" element={<div>Post ExamPage</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
