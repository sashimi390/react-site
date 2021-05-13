function Header() {
    return (
        <header className="hero is-success is-bold">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">COVID-19 data</h1>
                </div>
            </div>
        </header>
    );
}
import { useEffect } from "react";
import { getData } from "./api";
function Main() {
    useEffect(() => {
        getData().then((urls) => {
            console.log(urls);
        });
    }, []);
    return (
        <main>
            <section className="section">
                <div className="container">
                </div>
            </section>
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>datas are retrieved from COVID-19</p>
                <p>
                    <a href="https://documenter.getpostman.com/view/9215231/SzYaWe6h?version=latest">Donate to COVID-19 API</a>
                </p>
            </div>
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;

