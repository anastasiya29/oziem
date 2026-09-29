import styles from './Shows.module.scss'

const shows = [
  {
    dateMonth: 'Oct',
    dateDay: '23',
    venue: 'American Legion Post 3',
    venueLink: '',
    city: 'Gloucester, MA',
    info: '7:30'
  }
];

var Show = ({ dateMonth, dateDay, venue, venueLink, city, info }) => {
  return (
    <div className={styles.show}>
      <div className={styles.date}>
        <span>{dateMonth}</span>
        <span>{dateDay}</span>
      </div>
      <div className={styles.info}>
        <div className={styles.city}>{city}</div>
        <div>
          {
            venueLink ? <a target="_blank" href={venueLink}>{venue}</a> : <>{venue}</>
          }
        </div>
        <div>{info}</div>
      </div>
    </div>
  )
}

export default function Shows() {
  return (
    <div className={styles.shows}>
      <div>
        <h2>Upcoming Shows</h2>
      </div>

      {
        shows.map(show => {
          return <Show {...show} />
        })
      }
    </div>
  )
}