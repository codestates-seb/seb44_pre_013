import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import RouteProvider from './Routes';
import GlobalStyles from './styles/GlobalStyles';
import BeforeLoginHeader from './components/BeforeLoginHeader';
import AfterLoginHeader from './components/AfterLoginHeader';

function App() {
  const isLogin = useSelector((state: RootState) => state.login.isLogin);
  return (
    <>
      <GlobalStyles />
      <RouteProvider>{isLogin ? <AfterLoginHeader /> : <BeforeLoginHeader />}</RouteProvider>
    </>
  );
}

export default App;
