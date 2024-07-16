import React, {useState} from "react";
// import ClassCounter from "./componets/ClasssCounter";
import './styles/App.css';
import Postitem from "./componets/Postitem";
import Postlist from "./componets/Postlist";
import MyButton from "./componets/UI/button/MyButton";
import MyInput from "./componets/UI/input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    {id: 1,title: 'JavaScript',  body: 'Description'},
    {id: 2,title: 'JavaScript 2',  body: 'Description'},
    {id: 3,title: 'JavaScript 3',  body: 'Description'},

  ])


  return (
    <div className="App">
<form>
  <MyInput type='text' placeholder="Название постa"/>
  <MyInput type='text' placeholder="Описание поста"/>
  <MyButton>Создать пост</MyButton>

</form>
<Postlist posts={posts} title='Посты про JS'/>
    </div>

    
  );
}
export default App ;
