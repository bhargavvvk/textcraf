import React from 'react';

export default function Textsummary({ text ,mode}) {
    const charcount = text.length; // Use .length to get the number of characters
    const wordcount = text.split(/\s+/).filter((word) => word.length > 0).length; // Count words
    const specialCharCount = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;  // Count special characters
    const spaceCount = (text.match(/\s/g) || []).length;  // Count spaces


    return (
        <div className="container" style={{ color: mode === 'light' ? 'black' : 'white' }}>
            <h3>Text Summary</h3>
            <p>The text contains {wordcount} words,{charcount} characters,{specialCharCount} special characters, and {spaceCount} spaces.</p>
        </div>
    );
}

