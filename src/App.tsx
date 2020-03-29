import React from 'react';
import './App.css';
import { BooksContainer } from "./books/BooksContainer";

function App() {
    return (
        <div className={"app-container"}>
            <div className="App">
                <header>
                    <BooksContainer />
                </header>
            </div>
        </div>
    );
}

export default App;
