import React from 'react';
import { Link } from 'react-router-dom';

export default function Blogs() {
    const posts = [
        {
            title: 'Context-Driven LLM Development: A Real-World Walkthrough',
            filename: '2025-06-24-context-driven-llm-development.html',
        },
    ];

    return (
        <div className="section">
            <h2>Blogs</h2>
            <ul className="list">
                {posts.map((post) => (
                    <li key={post.filename}>
                        <Link to={`/blog/${post.filename}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}


