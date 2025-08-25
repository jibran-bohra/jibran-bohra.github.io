import React, { useEffect, useState } from 'react';

export default function DarkModeToggle() {
    const [theme, setTheme] = useState('auto');

    useEffect(() => {
        const saved = localStorage.getItem('theme') || 'auto';
        setTheme(saved);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.dataset.theme = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <div className="theme-toggle">
            <select aria-label="Theme" value={theme} onChange={(e) => setTheme(e.target.value)}>
                <option value="auto">Auto</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
            </select>
        </div>
    );
}


