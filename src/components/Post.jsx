import React, { useEffect, useState } from "react";
import { posts } from "../store";
import { useStore } from "@nanostores/react";
import styles from "./Post.module.css";

function Post({ id }) {
  const $posts = useStore(posts);
  const [currentPost, setCurrentPost] = useState(null);
  useEffect(() => {
    if (id) {
      const filteredPost = $posts.filter((post) => post.id === Number(id));
      setCurrentPost(filteredPost[0]);
    }
  }, [id]);

  return (
    <div>
      <h1>{currentPost?.titulo}</h1>
      <img className={styles.postImage} src={currentPost?.image} alt="" />
      <p>{currentPost?.conteudo}</p>
      <div className={styles.tagsContainer}>
        <p>Tag:</p>
        <p>#{currentPost?.tag}</p>
      </div>
    </div>
  );
}

export default Post;
