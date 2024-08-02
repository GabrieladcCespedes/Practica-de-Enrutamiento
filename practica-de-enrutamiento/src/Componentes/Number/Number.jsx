import React from "react";
import {useParams} from 'react-router-dom';

const Number = () => {
    const { number } = useParams();
     // Validar si el parámetro es un número
    /* if (isNaN(number)) {
        return <Navigate to="/home" />;
    }*/
    return <h1>The number is: {number}</h1>
}

export default Number;