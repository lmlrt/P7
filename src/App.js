import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/Home/Home';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Housing from './components/Housing/Housing';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing" element={<Housing />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
