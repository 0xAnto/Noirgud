import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Projects from './pages/Projects';
import Libraries from './pages/Libraries';

const App: React.FC = () => {
    return (
        <ThemeProvider defaultTheme="dark">
            <Router>
                <div className="flex flex-col min-h-screen">
                    <Navbar />
                    <main className="flex-grow">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/learn" element={<Learn />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/libraries" element={<Libraries />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
