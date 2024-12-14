import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { MENU_OPTIONS, PARENT_ROUTE, PATHS } from "./constants";
import Members from "./components/members";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={PARENT_ROUTE} element={<Home />} />
                <Route path={PATHS[MENU_OPTIONS.ABOUT]} element={<About />} />
                <Route
                    path={PATHS[MENU_OPTIONS.MEMBERS]}
                    element={<Members />}
                />
                <Route
                    path={PATHS[MENU_OPTIONS.MEMBERS]}
                    element={<Members />}
                />
                <Route
                    path={PATHS[MENU_OPTIONS.CONTACT]}
                    element={<Contact />}
                />
            </Routes>
        </Router>
    );
}

export default App;
