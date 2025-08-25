import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

export default function BlogView() {
    const { filename } = useParams();
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        let mounted = true;
        setContent('');
        setError('');
        fetch(`/blogs/${filename}`)
            .then(async (res) => {
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                return res.text();
            })
            .then((html) => {
                if (mounted) setContent(html);
            })
            .catch((e) => {
                if (mounted) setError('Failed to load blog post.');
                console.error(e);
            });
        return () => {
            mounted = false;
        };
    }, [filename]);

    return (
        <div className="section">
            <p><Link to="/blogs">← Back to Blogs</Link></p>
            {error && <p className="error">{error}</p>}
            {content ? (
                <iframe title={filename} className="blog-frame" srcDoc={content} />
            ) : (
                !error && <p>Loading…</p>
            )}
        </div>
    );
}


