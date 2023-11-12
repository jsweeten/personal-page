import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import Navbar from "./Navbar.jsx"
import About from "./components/About.jsx"
import Schedule from "./components/Schedule.jsx"
import Press from "./components/Press.jsx"
import Media from "./components/Media.jsx"
import Contact from "./components/Contact.jsx"
import './style.css';

function ApplicationViews() {
    return <>
        <Router>
            <Routes>
                <Route path="/" element={
                <>
                    <section className="header-container">
                    <header id="header">Jay Sweet Music</header>
                    </section>

                    <Navbar />
                    < Outlet />
                </>
                }>
                    <Route index element={< About />} />
                    <Route path="about" element={< About />} />
                    <Route path="schedule" element={< Schedule />} />
                    <Route path="media" element={< Media />} />
                    <Route path="contact" element={ < Contact /> } />
                    <Route path="press" element={ < Press /> } />
                </Route>
            </Routes>
        </Router>
    </>
}

export default ApplicationViews;