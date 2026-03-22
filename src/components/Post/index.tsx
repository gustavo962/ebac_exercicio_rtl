import styles from './Post.module.css'
import PostComments from '../PostComments'

const Post = () => {
  return (
    <article className={styles.card}>
      <h1 className={styles.title}>Postagem</h1>
      <p className={styles.text}>
        Esse é um post de exemplo para testar a inserção de comentários.
      </p>

      <PostComments />
    </article>
  )
}

export default Post