import './App.css';
import { Route, Routes } from "react-router-dom";
import FeedbackDetail from './components/view/feedbackDetail/FeedbackDetail';
import Home from './components/view/home/Home';
import EditFeedback from './components/view/editFeedback/EditFeedback';
import AddFeedback from './components/view/addFeedback/AddFeedback';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:id" element={<FeedbackDetail />} />
      <Route path="/editFeedback" element={<EditFeedback />} />
      <Route path="/addFeedback" element={<AddFeedback />} />
      <Route path='*' element="" /> 
    </Routes>
  );
}

export default App;
