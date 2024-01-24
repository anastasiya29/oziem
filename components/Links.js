import styles from './Links.module.scss'

export default function Links() {
  return (
    <div className={styles.links}>
      <div>
        <h2>MUSIC</h2>

        <div className={styles.inlineFlex}>
          <div className={styles.buttonList}>
            <a target="_blank" href="https://music.apple.com/us/artist/oziem/1624743532">Apple Music</a>
            <a target="_blank" href="https://music.amazon.com/artists/B0B1KRPNWQ/oziem">Amazon Music</a>
            <a target="_blank" href="https://open.spotify.com/artist/1QTRyhCyQoDVUkxPT0UlFn">Spotify</a>
          </div>

          <div className={styles.buttonList}>
            <a target="_blank" href="https://oziem.bandcamp.com/album/admiral-squidzilla-the-great-crustacean-emancipation">Bandcamp</a>
            <a target="_blank" href="https://www.youtube.com/channel/UCTztPnn96wYoVa3d1YixT6g/videos">YouTube</a>
          </div>
        </div>
      </div>

      <div>
        <h2>SOCIALS</h2>

        <div className={styles.buttonList}>
          <a target="_blank" href="https://www.facebook.com/Oziemofficial/">Meta</a>
          <a target="_blank" href="https://www.instagram.com/oziemofficial/">Instagram</a>
          <a target="_blank" href="https://www.bandsintown.com/a/13516413-oziem">Bands In Town</a>
        </div>
      </div>
    </div>
  )
}