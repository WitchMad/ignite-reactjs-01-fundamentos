import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import styles from './Post.module.css'

export function Post({ id, author, content, publishedAt }) {
  const [comments, setComments] = useState([])
  const [newCommentText, setNewCommentText] = useState('')
  
  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })
  const publishedDateFormattedRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleNewCommentChange(e) {
    setNewCommentText(e.target.value)
  }

  function handleCreateNewComment(e) {
    e.preventDefault()
    
    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function deleteComment(comment) {
    // 
  }

  return (
    <article key={id} className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateFormattedRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map((line) => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }
          if(line.type === 'link') {
            return <p key={line.content}><a href="">{line.content}</a></p>
          }
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>
        <textarea value={newCommentText} onChange={handleNewCommentChange} placeholder='Deixe um comentário'></textarea>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment 
            content={comment}
            onDeleteComment={deleteComment}
            key={comment}
          />
        ))}
      </div>
    </article>
  )
}