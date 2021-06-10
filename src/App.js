import axios from 'axios';
import { createUseStyles } from 'react-jss';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './components/Router';
import { API_URL } from './config/api';

axios.defaults.baseURL = API_URL;

const useStyles = createUseStyles((theme) => ({
  '@global': {
    body: {
      margin: 0,
    },
    html: {
      fontFamily: 'Rubik, sans-serif',
    },
  },
}));

function App() {
  useStyles();
  return (
    <div className='App'>
      <Header />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
