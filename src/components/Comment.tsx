import { Trash, ThumbsUp } from 'phosphor-react'
import { useState } from 'react';

import styles from './Comment.module.css';
import { Avatar } from './Avatar';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likedCount, setLikedCount] = useState(0);


  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikedCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/henriquevazquez.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrique Vazquez</strong>
              <time title='05 de abril às 20:36h' dateTime='05-04-2023 20:35:55'>Cerca de 1h atrás</time>
            </div>

            <button
              onClick={handleDeleteComment}
              title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likedCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}