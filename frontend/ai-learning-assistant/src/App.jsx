import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
    const isAuthenticated = false
    const loading = false

    if (loading){
        return (
            <div className="">
                <p>Loading...</p>
            </div>
        );
    }
}
export default App

