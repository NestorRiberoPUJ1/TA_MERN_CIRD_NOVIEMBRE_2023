
import PersonForm from '@/components/PersonForm/PersonForm'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <PersonForm />
    </main>
  )
}
