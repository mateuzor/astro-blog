import React, { useState, useEffect } from "react";
import styles from "./CommentReact.module.css";
import { posts } from "../store";
import { useStore } from "@nanostores/react";
import { addComment } from "../store";

function CommentReact({ postId }) {
  const $posts = useStore(posts);
  const [comments, setComments] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  useEffect(() => {
    const filteredComments = $posts.filter(
      (post) => post.id === Number(postId)
    );
    setComments(filteredComments[0].comments);
  }, [postId, $posts]);

  return (
    <>
      {comments?.map((comment) => {
        return (
          <div className={styles.commentContainer} key={comment.id}>
            <img
              height={40}
              src={
                "https://www.nicepng.com/png/detail/933-9332131_profile-picture-default-png.png"
              }
              alt=""
            />
            <div className={styles.commentContent}>
              <p>{comment.mensagem}</p>
              <div className={styles.commentDetails}>
                <p className={styles.author}>{comment.autor}</p>
                <p>
                  {comments.data} {comment.hora}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <div>
        <h5 className={styles.title}>LEAVE A REPLY</h5>
        <div className={styles.replyContainer}>
          <textarea
            className={styles.textInput}
            onChange={(e) => {
              setUserMessage(e.target.value);
            }}
            id="w3review"
            name="w3review"
            placeholder="Write Comment"
          ></textarea>
          <button
            onClick={() =>
              addComment(postId, {
                id: 3,
                autor: "Sebastiana",
                mensagem: userMessage,
                data: "2022-10-18",
                hora: "12:45",
              })
            }
            className={styles.submitButton}
          >
            POST COMMENT
          </button>
        </div>
      </div>
    </>
  );
}

export default CommentReact;
