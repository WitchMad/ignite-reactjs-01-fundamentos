import { Header } from './components/Header';

import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';

import './global.css'
import styles from './App.module.css'

export function App() {
  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/witchmad.png',
        name: 'Lucas Henrique',
        role: 'Frontend Developer'
      },
      content: [
        {
          type: 'paragraph' as 'paragraph' | 'link',
          content: 'Lorem ipsum dolor'
        }, {
          type: 'paragraph' as 'paragraph' | 'link',
          content: 'sit amet'
        }, {
          type: 'link' as 'paragraph' | 'link',
          content: 'next/image'
        }
      ],
      publishedAt: new Date(),
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO Rocketseat'
      },
      content: [
        {
          type: 'paragraph' as 'paragraph' | 'link',
          content: 'Lorem ipsum dolor'
        }, {
          type: 'paragraph' as 'paragraph' | 'link',
          content: 'sit amet'
        }, {
          type: 'link' as 'paragraph' | 'link',
          content: 'next/image'
        }
      ],
      publishedAt: new Date(),
    }
  ]

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                id={post.id}
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}