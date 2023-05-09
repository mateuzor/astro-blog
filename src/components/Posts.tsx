import React from "react";
import { posts } from "../store";
import { useStore } from "@nanostores/react";
import styles from "./Posts.module.css";

function Posts() {
  const $posts = useStore(posts);
  return (
    <div className={styles.postsContainer}>
      {$posts.map((post) => {
        return (
          <div key={post.id}>
            <a href={`/posts/${post.id}`}>
              <div className={styles.post}>
                <img className={styles.postImage} src={post.image} alt="" />
                <div className={styles.postDetails}>
                  <a className={styles.postTag} href={`categories/${post.tag}`}>
                    <p>#{post.tag}</p>
                  </a>
                  <h4 className={styles.postTitle}>{post.titulo}</h4>
                  <div className={styles.postInfo}>
                    <p>{post.data_criacao}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
