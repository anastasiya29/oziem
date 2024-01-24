import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div>© {(new Date().getFullYear())} OZIEM</div>
        <div>We do not use cookies and we do not track you</div>
      </footer>
    </>
  )
}
