
import styles from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'

function App() {

  return (
    <main className={styles.contentWrapper}>
      <LoginBox />
      <MessageList />
    </main>
  )
}

export default App
