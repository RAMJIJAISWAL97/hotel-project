import React from 'react';
import Chapter from './Chapter';

const Kanda = ({ title, chapters }) => {
    return (
        <section>
            <h2>{title}</h2>
            <ul>
                {chapters.map((chapter, index) => (
                    <li key={index}>
                        <Chapter title={chapter.title} audioSrc={chapter.audioSrc} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Kanda;
