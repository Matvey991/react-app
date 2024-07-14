import React, {useState} from "react";
// import ClassCounter from "./componets/ClasssCounter";
import './styles/App.css';
import Postitem from "./componets/Postitem";
import Postlist from "./componets/Postlist";
function App() {
  const [posts, setPosts] = useState([
    {id: 1,title: 'JavaScript',  body: 'Description'},
    {id: 2,title: 'JavaScript 2',  body: 'Description'},
    {id: 3,title: 'JavaScript 3',  body: 'Description'},

  ])
  return (
    <div className="App">
<Postlist posts={posts}/>
    </div>

    
  );
}
export default App ;
