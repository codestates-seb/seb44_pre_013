import RouteProvider from './Routes';
import GlobalStyles from './styles/GlobalStyles';
import AfterLoginHeader from './components/AfterLoginHeader';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouteProvider>
        <AfterLoginHeader />
      </RouteProvider>
    </>
  );
}

export default App;
