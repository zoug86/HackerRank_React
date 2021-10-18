import React, { useState } from 'react';
import './App.css';
import 'h8k-components';

import Articles from './components/Articles';

const title = "Sorting Articles";

function App({ articles }) {

    const [newArticles, setNewArticles] = useState([...articles].sort((a, b) => parseInt(b.upvotes) - parseInt(a.upvotes)));

    const handleMostUpvoted = () => {
        setNewArticles([...articles].sort((a, b) => parseInt(b.upvotes) - parseInt(a.upvotes)));
    }

    const handleMostRecent = () => {
        setNewArticles([...articles].sort((a, b) => Date.parse(b.date) - Date.parse(a.date)));
    }
    console.log(articles)
    return (
        <div className="App">
            <h8k-navbar header={title}></h8k-navbar>
            <div className="layout-row align-items-center justify-content-center my-20 navigation">
                <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                <button data-testid="most-upvoted-link" className="small" onClick={handleMostUpvoted}>Most Upvoted</button>
                <button data-testid="most-recent-link" className="small" onClick={handleMostRecent}>Most Recent</button>
            </div>
            <Articles articles={newArticles} />
        </div>
    );

}

export default App;
