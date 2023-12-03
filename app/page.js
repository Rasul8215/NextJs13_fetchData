import styles from './page.module.scss'
import Header from './components/Header/Header'
import Users from './Users/page'
import { UserCard } from './components/UserCard/UserCard'

export default function Home() {
  return (
    <main>
      <Header />
      <UserCard />
    </main>
  )
}
