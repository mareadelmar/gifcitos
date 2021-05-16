import React from "react";
import { Route } from "wouter";
import { GifsContextProvider } from "./context/GifsContext";
import "./App.css";
import Header from "./components/Header";
import PageResults from "./pages/PageResults";
import HomePage from "./pages/HomePage";
import SearchBar from "./components/SearchBar";
import PageDetails from "./pages/PageDetails";

function App() {
    return (
        <div className="App">
            <Header />
            <SearchBar />
            <section className="App-container">
                <GifsContextProvider>
                    <Route path="/" component={HomePage} />
                    <Route path="/search/:keyword" component={PageResults} />
                    <Route path="/gif/:id" component={PageDetails} />
                    <Route path="/404" component={() => <p>error :s </p>} />
                </GifsContextProvider>
            </section>
        </div>
    );
}

export default App;
