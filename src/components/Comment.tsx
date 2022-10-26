import { useState } from 'react'

import styles from './Comment.module.css'

import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'

interface CommentProps {
  content: string
  onDeleteComment: (v: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  function handleDeleteComment() {
    onDeleteComment(content)
  }
  return (
    <div className={styles.comment}>
      <Avatar 
        hasBorder={false} 
        src="https://github.com/witchmad.png" 
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Henrique</strong>
              <time title="24 de agosto às 11:56" dateTime="2022-10-24 11:56">Cerca de 1 hora atrás</time>
            </div>
            <button title="Deletar comentário" onClick={handleDeleteComment}>
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir
            <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}