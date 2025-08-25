import React from 'react';

export default function Home() {
    return (
        <div className="section">
            <div className="hero">
                <h1>Jibran Bohra</h1>
                <p className="subtitle">Backend engineering, data, and quantitative finance</p>
                <p>
                    For collaborations or discussions: <a href="mailto:jabohra17@gmail.com">jabohra17@gmail.com</a>
                </p>
            </div>

            <div className="card">
                <h2>My Day Job</h2>
                <p>
                    I'm currently at Zoomprop, where I started as a Junior Backend Engineer and grew into a lead role. Working in a small, focused team has sharpened my ability to learn quickly and adapt. Staying close to emerging technologies—especially the rise of LLMs—has shaped a flexible engineering style that's essential in today's fast-changing backend landscape.
                </p>
            </div>

            <div className="card">
                <h2>Physics</h2>
                <p>
                    My MSc thesis, <a href="http://hdl.handle.net/11427/39283" target="_blank" rel="noreferrer">“The Jet/CGC correspondence: a conformal perspective,”</a> focused on bridging two distinct applications of Quantum Chromodynamics (QCD) using conformal transformations. The research investigated a conformal map linking jet evolution (modeling high-energy particle production) to Color Glass Condensate (CGC) evolution (modeling high-energy scattering). The goal was to use this map's properties to address phenomenological shortcomings in CGC evolution, particularly the collinear singularities in the JIMWLK equation, and better align the theory with established models for greater phenomenological success.
                </p>
            </div>

            <div className="card">
                <h2>Publications</h2>
                <ul className="list">
                    <li>
                        J. A. Bohra and Prof. Heribert Weigert, "The Jet/CGC Correspondence: A Conformal Perspective." Presented at Excited QCD 2022. <a href="https://www.pos.sissa.it/423/" target="_blank" rel="noreferrer">Preview available</a>
                    </li>
                </ul>
            </div>

            <div className="card">
                <h2>Talks</h2>
                <ul className="list">
                    <li>The Jet/CGC Correspondence: A Perspective through Conformal Transformations, eQCD 2022.</li>
                </ul>
            </div>

            <div className="card">
                <h2>Open Source Projects</h2>
                <ul className="list">
                    <li><a href="https://github.com/jibran-bohra/protein-structure-prediction" target="_blank" rel="noreferrer">Predicting Protein Structure using CNN and LSTM</a></li>
                    <li><a href="https://github.com/jibran-bohra/OSINT-image-geolocator" target="_blank" rel="noreferrer">Geolocating Images with Search Engine</a></li>
                </ul>
            </div>
        </div>
    );
}


