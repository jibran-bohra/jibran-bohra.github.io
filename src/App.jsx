import React from 'react';
import { Link, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import BlogView from './pages/BlogView.jsx';
import DarkModeToggle from './components/DarkModeToggle.jsx';

export default function App() {
    return (
        <div className="app-root">
            <header className="site-header">
                <div className="container header-inner">
                    <div className="brand">
                        <Link to="/" className="brand-link">Jibran Bohra</Link>
                    </div>
                    <nav className="nav">
                        <Link to="/" className="nav-link">Home</Link>
                        <Link to="/blogs" className="nav-link">Blogs</Link>
                        <a className="nav-link" href="/data/jabohra-curriculum_vitae.pdf" target="_blank" rel="noreferrer">CV</a>
                        <DarkModeToggle />
                    </nav>
                </div>
            </header>

            <main className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/blog/:filename" element={<BlogView />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>

            <footer className="site-footer">
                <div className="container">
                    <span>© {new Date().getFullYear()} Jibran Bohra</span>
                </div>
            </footer>
        </div>
    );
}


