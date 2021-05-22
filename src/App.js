import { useEffect, useState } from "react";
import { getData } from "./api";
import Chart from "./Chart";//node.jsでは拡張子いらない(.jsとか)
import Death from "./Death";//node.jsでは拡張子いらない(.jsとか)

function Loading() {
    return <p>Loading...</p>;
}

function Header() {
    return (
        <header className="hero is-small is-success is-bold">
            <div className="hero-body">
                <h1 className="title">Covid-19</h1>
                <p className="subtitle">
                    日本のコロナ状況
          </p>
            </div>
        </header>
    );
}

function Table(props) {//表の表示
    const { datas } = props;
    if (datas == null)
        return <Loading />;
    return (
        <table className="table is-striped">
            <caption>日本のコロナ</caption>
            <thead>
                <tr>
                    <th>都道府県</th>{/* 横 */}
                    <th>PCR検査数</th>
                    <th>累計感染者数</th>
                    <th>重症者数</th>
                    <th>死者数</th>
                    <th>データ更新日</th>
                </tr>
            </thead>
            <tbody>

                {datas.map(data => {
                    return (
                        <tr key={data.id}>
                            <td>{data.name_ja}</td>
                            <td>{data.pcr}件</td>
                            <td>{data.cases}人</td>
                            <td>{data.severe}人</td>
                            <td>{data.deaths}人</td>
                            <td>{data.last_updated.cases_date}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table >
    );
}

function Form(props) {
    const { datas } = props;
    if (datas == null)
        return <Loading />;
    function handleSubmit(event) {
        event.preventDefault();
        const { breed } = event.target.elements;
        props.onFormSubmit(breed.value);
    }
    return (
        <div>
            <label class="label">都道府県を絞る</label>
            <form onSubmit={handleSubmit}>
                <div className="field has-addons" >
                    <div className="control is-expanded " >
                        <div className="select  is-link " >
                            <select name="breed" defaultValue="北海道" >
                                {datas.map(data => {
                                    return (
                                        <option value={data.name_ja} >{data.name_ja}</option >
                                    );
                                })}
                                <option value="全て" >全国を表示する</option >
                            </select >
                        </div >
                    </div >
                </div >
                <div className="control" >
                    <button type="submit" className="button is-link is-focused is-rounded" >
                        Reload</button >
                </div >
            </form >
        </div >
    );
}


function Main() {
    const [datas, setDatas] = useState(null);
    const [table_datas, tableDatas] = useState(null);

    useEffect(() => {
        getData().then((datas) => {
            datas.sort((a, b) => b.cases - a.cases)
            setDatas(datas);
            tableDatas(datas);
        });
    }, []);

    function reloadData(value) {
        getData().then((table_datas) => {
            if (value !== "全て")
                table_datas = [table_datas.find(v => v.name_ja === value)]
            tableDatas(table_datas);
        });
    }
    return (
        <main>
            <section className="section">
                <div className="container">
                    <h2 class="subtitle is-">感染者数が多い都道府県順グラフ</h2>
                    <Chart data={datas} />

                </div>
                <div className="container">
                    <h2 class="subtitle">死者数</h2>
                    <Death data={datas} />

                </div>
            </section>
            <section className="section">
                <div className="container">
                    <Form onFormSubmit={reloadData} datas={datas} />
                    <Table datas={table_datas} />
                </div>
            </section>
        </main>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>data are retrieved from COVID-19</p>
                <p>
                    <a href="https://covid19-japan-web-api.vercel.app/api/v1/prefectures">Donate to COVID-19 API</a>
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

