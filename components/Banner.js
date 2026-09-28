import styles from '@components/Banner.module.scss'

export default function Banner() {
  return (
    <div className={styles.banner}>
      <h1>OZIEM</h1>

      <div className={styles.player}>
        <h2>NEW ALBUM OUT NOW</h2>
        <iframe
          src="https://bandcamp.com/EmbeddedPlayer/album=2528098112/size=large/bgcol=ffffff/linkcol=0050a7/tracklist=false/artwork=small/transparent=true/"
          seamless></iframe>
      </div>
    </div>
  )
}