import './App.css';
import { Route, Routes } from "react-router-dom";
import FeedbackDetail from './components/view/feedbackDetail/FeedbackDetail';
import Home from './components/view/home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<FeedbackDetail />} />
      <Route path='*' element="" /> 
    </Routes>
  );
}

export default App;
