import Home from "./pages/Home";
import Login from "./pages/Login";
import AppRoutes from "./pages/routes";
import GlobalStyle from "./styles/global";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <>
      <GlobalStyle />
      <AppRoutes />
      <ToastContainer/>
    </>
  );
}

export default App;
