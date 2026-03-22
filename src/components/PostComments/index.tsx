import { useState } from 'react'
import styles from './PostComments.module.css'
import { Comment } from '../../models/Comment'

const PostComments = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [comments, setComments] = useState<Comment[]>([])

  const addComment = () => {
    if (!name.trim() || !message.trim()) return

    const newComment: Comment = {
      id: Date.now(),
      name,
      message
    }

    setComments([...comments, newComment])
    setName('')
    setMessage('')
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comentários</h2>

      <input
        data-testid="name-input"
        className={styles.input}
        type="text"
        placeholder="Seu nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <textarea
        data-testid="message-input"
        className={styles.textarea}
        placeholder="Seu comentário"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        data-testid="submit-button"
        className={styles.button}
        onClick={addComment}
      >
        Adicionar comentário
      </button>

      <ul data-testid="comments-list" className={styles.list}>
        {comments.map((comment) => (
          <li key={comment.id} data-testid="comment-item" className={styles.item}>
            <strong>{comment.name}</strong>
            <p>{comment.message}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostComments