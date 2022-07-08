import ReactDOM from 'react-dom';
import Main from './Main';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
// import your route components too

export default function App() {
  ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
  
        </Route>
      </Routes>
    </BrowserRouter>
  );

}
