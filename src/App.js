import './App.css';
import { Route, Routes } from "react-router-dom";
import TopicBlog from './routes/topicBlog/TopicBlog';
import Home from './routes/home/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog/:title" element={<TopicBlog />} />
      <Route path='*' element="" /> 
    </Routes>
  );
}

export default App;
