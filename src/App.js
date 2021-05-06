import React from "react";
import { Route } from "wouter";
import "./App.css";
import Header from "./components/Header";
import PageResults from "./pages/PageResults";
import HomePage from "./pages/HomePage";

function App() {
    return (
        <div className="App">
            <Header />
            <section className="App-container">
                <Route path="/" component={HomePage} />
                <Route path="/search/:keyword" component={PageResults} />
                <Route path="gif/:id" component="" />
            </section>
        </div>
    );
}

export default App;
