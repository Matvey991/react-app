import React, {useMemo, useRef, useState} from "react";

// import ClassCounter from "./componets/ClasssCounter";
import './styles/App.css';
import Postitem from "./componets/Postitem";
import Postlist from "./componets/Postlist";
import MyButton from "./componets/UI/button/MyButton";
import MyInput from "./componets/UI/button/input/MyInput";
import PostForm from "./componets/PostForm";
import MySelect from "./componets/UI/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1,title: 'ПрИВеТ',  body: '6'},
    {id: 2,title: 'Пока',  body: '5'},
    {id: 3,title: 'КаК деЛаЮЮЮ',  body: '4'},

  ])
const [selectedSort, setselectedSort] = useState('')
const [searchQuery, setSearchQuery] = useState('')

const sortedPosts = useMemo(() => {
  if(selectedSort) {
    return  [...posts].sort((a, b) => a[selectedSort].localeCompare(b[setselectedSort]))
  }
  return posts
}, [selectedSort, posts])

const sortedAndSearchedPosts = useMemo(() => {
return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
}, [searchQuery, sortedPosts])

const createPost = (newPost) => {
  setPosts([...posts, newPost])
}

const removePost = (post) => {
  setPosts(posts.filter(p => p.id !== post.id))
}


const SortPosts = (sort) => {
setselectedSort(sort)
}

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput 
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder='Поиск...'
        />
    <MySelect
    value={selectedSort}
    onChange={SortPosts}
    defaultValue='Сортировка'
    options={[
      {value: 'title', name: 'По названию'},
      {value: 'body', name: 'По описанию'}

    ]}
    />
      </div>
      {sortedAndSearchedPosts.length !== 0
      ?  <Postlist remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
      : 
      <h1 style={{textAlign: 'center'}}>
        Посты не найдены
      </h1>
      }
    </div>

    
  );
}
export default App;
