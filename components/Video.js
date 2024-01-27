import styles from '@components/Video.module.scss'

var VideoFrame = ({ title, description, id, start }) => {
  var url = `https://www.youtube.com/embed/${id}` + (start ? `?start=${start}` : '');
  return (
    <div className={styles.video}>
      <div>{description}</div>
      <iframe
        src={url}
        title={title}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
      </iframe>
    </div>
  )
}

export default function Video() {
  return (
    <div className={styles.videoContainer}>
      <h2>Videos</h2>

      <VideoFrame
        title="OZIEM live from The Stone Church in Brattleboro VA 2023-01-27"
        description="That time when Bill had a mosh inside that needed to come out..."
        id="Q7qMVn3j4s8"
        start="4291"
      />

      <VideoFrame
        title="Motif's Between The Notes Featuring: OZIEM | LIVE Podcast"
        description="That time when we performed on a fancy podcast stage..."
        id="_WlfqgngQQI"
        start="983"
      />

      <VideoFrame
        title="OZIEM - Jäger Time (Unofficial Music Video)"
        description="That time when Sean cut together a kick-ass Jäger Time video from our shenanigans..."
        id="HFbzFJfnWOE"
      />

    </div>
  )
}