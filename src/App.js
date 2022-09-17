import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from 'components/Layout';
import Home from 'pages/HomePage';
import About from 'pages/AboutPage';
import Portfolio from 'pages/PortfolioPage';
import Contact from 'pages/ContactPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
