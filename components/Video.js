import styles from '@components/Video.module.scss'

export default function Video() {
  return (
    <div>
      <h2>Videos</h2>

      <div className={styles.video}>
        <div>That time when Bill had a mosh inside that needed to come out...</div>
        <iframe
          src="https://www.youtube.com/embed/Q7qMVn3j4s8?si=5hOgHg7xtkJdGK0m&amp;start=4291"
          title="OZIEM live from The Stone Church in Brattleboro VA 2023-01-27"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
      </div>
    </div>
  )
}