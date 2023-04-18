import { Header } from './components/Header';
import { Post, PostType } from './components/Post';
import { Sidebar } from './components/Sidebar';


import styles from './App.module.css';

import './global.css';

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/henriquevazquez.png',
      name: 'Henrique Vazquez',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'cabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'github.com/HenriqueVazquez/Ignite-Feed' }
    ],
    publishedAt: new Date('2023-04-08  20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://scontent.fgru4-1.fna.fbcdn.net/v/t1.18169-9/308613_210115049044113_4750112_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFfqx_X35CZ_5CqI1BwgnHlisgwycqCmsyKyDDJyoKazF6nzPg8Y266satkqM2W6_YnY7EibzMH6S-CXQfBEHCs&_nc_ohc=ttZq8yy9FbIAX_3yNQj&_nc_ht=scontent.fgru4-1.fna&oh=00_AfD5c0VHYM4IXW6PgjfWNQg3pJt9N9WMWoC7IB6DRUCSZQ&oe=645B4DE6',
      name: 'Karen Vazquez',
      role: 'Web Developer Senior'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'cabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'Karen.vazquez/doctorcare' }
    ],
    publishedAt: new Date('2023-04-10  11:15:22'),
  },

]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}


