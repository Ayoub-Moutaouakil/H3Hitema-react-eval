import './App.css';
import {Form} from './components/Form';
import {ArticleList} from './components/ArticleList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';

function App() {

  const [data , setData] = useState({
    articles : [
        {titre : "Article 1", description : "Description 1"},
        {titre : "Article 2", description : "Description 2"}
    ]
})

  return (
    <div className="App">
      <Form setData={setData}/>
      <hr/>
      <ArticleList data={data}/>
    </div>
  );
}

export default App;
