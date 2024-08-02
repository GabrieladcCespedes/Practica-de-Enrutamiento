import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

const ColoredWord = () => {
    const {word, color, bgColor} = useParams();
    // Validar si el parámetro word es una palabra (no un número)
    if (!isNaN(word)) {
        return <Navigate to="/home" />;
    }
    const style = {
        color: color,
        backgroundColor: bgColor,
    };
    return <h1 style= {style}>The word is: {word}</h1>;
}

export default ColoredWord;