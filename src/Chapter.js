import React from 'react';

const Chapter = ({ title, content }) => {
    return (
        <article>
            <h3>{title}</h3>
            <p>{content}</p>
        </article>
    );
};

export default Chapter;
