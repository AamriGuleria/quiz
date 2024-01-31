import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import QuestionPage from './components/QuestionPage';
import Question from "./components/Question"
import Display from "./components/Display"
function App() {
  return (
    <>
    <div className="App">
      <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/quest" element={<QuestionPage/>}></Route>
        <Route path="/sample" element={<Question/>}></Route>
        <Route path="/display" element={<Display/>}></Route>
      </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;
