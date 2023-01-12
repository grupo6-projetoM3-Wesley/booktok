import { RoutesMain } from './routes';
import { GlobalStyle } from './global';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <GlobalStyle />
      <RoutesMain />
      <ToastContainer />
    </>
  );
}

export default App;
