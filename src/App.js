import React, {useMemo, useRef, useState} from "react";
// import ClassCounter from "./componets/ClasssCounter";
import './styles/App.css';
import Postitem from "./componets/Postitem";
import Postlist from "./componets/Postlist";
import MyButton from "./componets/UI/button/MyButton";
import MyInput from "./componets/UI/button/input/MyInput";
import PostForm from "./componets/PostForm";
import MySelect from "./componets/UI/select/MySelect";
import PostFilter from "./componets/PostFilter";
import MyModal from "./componets/Mymodal/MyModal";

function App() {
  const [posts, setPosts] = useState([
    {id: 1,title: 'jGljf',  body: '1aa'},
    {id: 2,title: 'JFLjau',  body: '3k;kdf;'},
    {id: 3,title: 'R;jfdlu',  body: 'ro[;kkdj'},

  ])
const [filter, setFilter] = useState({sort: '', query: ''})
const [modal, setModal] = useState(false)

const sortedPosts = useMemo(() => {
  if(filter.sort) {
    return  [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
  }
  return posts
}, [filter.sort, posts])

const sortedAndSearchedPosts = useMemo(() => {
return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
}, [filter.query, sortedPosts])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setModal(false)
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

  return (
    <div className="App">
<MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
  Создать пользователя
</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={createPost}/>
       </MyModal>
   <hr style={{margin: '15px 0'}}/>
   <PostFilter
   filter={filter}
   setFilter={setFilter}
   /> 

 <Postlist remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
    </div>

    
  );
}
export default App;
