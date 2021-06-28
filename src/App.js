import React from "react";
import Button from "@material-ui/core/Button";
import "./App.css";
import News from './components/News/News';
import { useState,useEffect } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() =>{
    const url ='https://newsapi.org/v2/everything?q=tesla&from=2021-05-28&sortBy=publishedAt&apiKey=7d5104eecaa74c2ba156b3e0aa5d5139';
    fetch(url) 
    .then(res => res.json())
    .then(data => setArticles(data.articles))
  })
  return (
    <div>
      <h2>Headlins:{articles.length}</h2>
      {
        articles.map(article => <News article={article}></News>)
      }
    </div>
  );
}

export default App;
