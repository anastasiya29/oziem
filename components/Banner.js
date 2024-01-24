import styles from '@components/Banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1>OZIEM</h1>

      <div className={styles.player}>
        <h2>NEW ALBUM - LISTEN NOW</h2>
        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/album=1554097718/size=large/bgcol=ffffff/linkcol=6999a9/tracklist=false/artwork=none/transparent=true/"
          seamless></iframe>
      </div>
    </div>
  )
}