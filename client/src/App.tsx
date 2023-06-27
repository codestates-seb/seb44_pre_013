import AfterLoginHeader from './components/AfterLoginHeader';
import AfterLoginMainPage from './pages/AfterLoginMainPage';
import BeforeLoginHeader from './components/BeforeLoginHeader';
import BeforeLoginMainPage from './pages/AfterLoginMainPage';
import GlobalStyles from './styles/GlobalStyles';
import { RootState } from './store/store';
import RouteProvider from './Routes';
import { useSelector } from 'react-redux';

function App() {
  const isLogin = useSelector((state: RootState) => state.login.isLogin);

  return (
    <>
      <GlobalStyles />
      <RouteProvider>{isLogin ? <AfterLoginHeader /> : <BeforeLoginHeader />}</RouteProvider>
      <RouteProvider>{isLogin ? <AfterLoginMainPage /> : <BeforeLoginMainPage />}</RouteProvider>
    </>
  );
}

export default App;
