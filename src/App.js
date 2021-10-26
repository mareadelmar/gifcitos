import React from "react";
import { Route } from "wouter";
import { GifsContextProvider } from "./context/GifsContext";
import "./App.css";
import Header from "./components/Header";
import PageResults from "./pages/PageResults";
import PageHome from "./pages/PageHome";
import SearchBar from "./components/SearchBar";
import PageDetails from "./pages/PageDetails";
import Login from "./pages/Login";
import { UserContextProvider } from "./context/UserContext";

function App() {
    return (
        <div className="App">
            <UserContextProvider>
                <Header />
                <SearchBar />
                <section className="App-container">
                    <GifsContextProvider>
                        <Route path="/" component={PageHome} />
                        <Route
                            path="/search/:keyword"
                            component={PageResults}
                        />
                        <Route path="/gif/:id" component={PageDetails} />
                        <Route path="/login" component={Login} />
                        <Route path="/404" component={() => <p>error :s </p>} />
                    </GifsContextProvider>
                </section>
            </UserContextProvider>
        </div>
    );
}

export default App;
