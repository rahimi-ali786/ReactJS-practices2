import 'react-loading-skeleton/dist/skeleton.css';
import {createRoot} from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './app';
import {BrowserRouter as Router} from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
 <Router>
   <App />
 </Router>
);


