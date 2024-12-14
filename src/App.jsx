import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { MENU_OPTIONS, BASE_PATH, PATHS } from "./constants";
import Members from "./components/members";
import Gallery from "./components/gallery";
//
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path={BASE_PATH} element={<Home />} />
                {/* <Route path={PATHS[MENU_OPTIONS.ABOUT]} element={<About />} /> */}
                <Route path={PATHS[MENU_OPTIONS.ABOUT]} element={<Home />} />
                <Route
                    path={PATHS[MENU_OPTIONS.MEMBERS]}
                    element={<Members />}
                />
                <Route
                    path={PATHS[MENU_OPTIONS.CONTACT]}
                    element={<Contact />}
                />
                <Route
                    path={PATHS[MENU_OPTIONS.GALLERY]}
                    element={<Gallery />}
                />
                <Route path="*" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
