import React, { useEffect, useState, useRef } from "react";
import PostService from "../API/PostService";
import { usePosts } from "../hooks/UsePosts";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import MyButton from "../componets/UI/button/MyButton";
import PostForm from "../componets/PostForm";
import MyModal from "../componets//Mymodal/MyModal";
import PostFilter from "../componets/PostFilter";
import Postlist from "../componets/Postlist";
import Loader from "../componets/UI/Loader/Loader";
import Pagination from "../componets/pagination/Pagination";
import { CSSTransition } from "react-transition-group";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts(response.data);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <CSSTransition>
      <div className="App">
        <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
          Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </MyModal>
        <hr style={{ margin: "15px 0" }} />
        <PostFilter filter={filter} setFilter={setFilter} />
        {postError && <h1>Произошла ошибка ${postError}</h1>}
        {isPostsLoading ? (
          <div
            style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
          >
            <Loader />
          </div>
        ) : (
          <Postlist
            remove={removePost}
            posts={sortedAndSearchedPosts}
            title="Посты про JS"
          />
        )}
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />
      </div>
    </CSSTransition>
  );
}

export default Posts;
