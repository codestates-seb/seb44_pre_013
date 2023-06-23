import RouteProvider from './Routes';
import GlobalStyles from './styles/GlobalStyles';
import BeforeLoginHeader from './components/BeforeLoginHeader';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouteProvider>
        <BeforeLoginHeader />
      </RouteProvider>
    </>
  );
}

export default App;
