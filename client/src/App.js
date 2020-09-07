import React from 'react';
import './App.css';
import ArticleApiService from "./api/ArticleApiService";

export default function App() {
  async function OK() {
    await ArticleApiService.getArticles();
  }
  OK();

  return <div className="App"></div>;
}
