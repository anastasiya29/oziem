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
        title="MOZIEM @ Harvest Fest 2022/Freedom Field"
        id="fnS7vVqXqSo"
      />

      <VideoFrame
        title="OZIEM - Jäger Time (Unofficial Music Video)"
        id="HFbzFJfnWOE"
      />

    </div>
  )
}