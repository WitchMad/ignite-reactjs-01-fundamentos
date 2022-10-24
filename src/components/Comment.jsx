import styles from './Comment.module.css'

import { Trash, ThumbsUp } from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment() {
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
            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, molestias illo? Dolore aut nisi architecto alias pariatur omnis. Nesciunt rerum doloribus ad aliquam earum autem asperiores deleniti facere impedit placeat.</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}