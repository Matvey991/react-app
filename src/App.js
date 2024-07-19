import React, {useEffect, useMemo, useRef, useState} from "react";
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
import { usePosts } from "./hooks/UsePosts";
import UusePosts from './hooks/UsePosts'
import axios from "axios";
import PostService from "./API/PostService";
import Loader from "./componets/UI/Loader/Loader";

function App() {
  const [posts, setPosts] = useState([])
const [filter, setFilter] = useState({sort: '', query: ''})
const [modal, setModal] = useState(false)
const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
const [isPostsLoading, setIsPostsLoading] = useState(false)

useEffect(() => {
  fetchPosts()
  }, [])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
  setModal(false)
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}

async function fetchPosts() {
  setIsPostsLoading(true)
  setTimeout(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
    setIsPostsLoading(false)
  }, 1000)
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
{isPostsLoading
  ? <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
  :<Postlist remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
}
    </div>

    
  );
}
export default App;
