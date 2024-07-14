import React, {useState} from "react";
import ClassCounter from "./componets/ClasssCounter";
import './styles/App.css';
import Postitem from "./componets/Postitem";
import Postlist from "./componets/Postlist";
import MyButton from "../UI/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1,title: 'JavaScript',  body: 'Description'},
    {id: 2,title: 'JavaScript 2',  body: 'Description'},
    {id: 3,title: 'JavaScript 3',  body: 'Description'},

  ])
  return (
    <div className="App">
<form>
  <input type='text' placeholder="Название постa"></input>
  <input type='text' placeholder="Описание поста"></input>
  <MyButton>Создать пост</MyButton>

</form>
<Postlist posts={posts} title='Посты про JS'/>
    </div>

    
  );
}
export default App ;
