import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './Components/Layout';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<ContactMe />} />
                    <Route path='*' element={<Home />} />
                </Route>
            </Routes>
        </Router>
    </>
  );
}

export default App;
