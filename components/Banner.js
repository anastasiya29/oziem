import styles from '@components/Banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1>OZIEM</h1>

      <div className={styles.player}>
        <h2>NEW SINGLE FROM OUR UPCOMING ALBUM - LISTEN NOW</h2>
        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/track=3673999251/size=large/bgcol=ffffff/linkcol=0050a7/tracklist=false/artwork=small/transparent=true/"
          seamless></iframe>
      </div>
    </div>
  )
}