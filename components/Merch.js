import styles from './Merch.module.scss'

const inventory = [
  {
    title: "Squidzilla CD Album",
    image: "https://placehold.co/600x600?text=image coming soon"
  },
  {
    title: "Days of Flannel CD Album & Booklet",
    image: "https://placehold.co/600x600?text=image coming soon"
  },
  {
    title: "Squidzilla Teal Hoodie",
    image: "/merch/hoodie-squid-teal.png"
  },
  {
    title: "Squidzilla Black Hoodie",
    image: "/merch/hoodie-squid-black.png"
  },
  {
    title: "Disgruntled Fly T-Shirt",
    image: "https://placehold.co/600x600?text=image coming soon"
  }
];

var InventoryItem = ({ title, image }) => {
  return (
    <div className={styles.inventoryItem}>
      <img src={image} />
      <div>{title}</div>
    </div>
  );
}

export default function Merch() {
  return (
    <div className={styles.merch}>
      <div>
        <h2>MERCH</h2>
        <div>
          Available at shows or by email (oziemtheband@gmail.com)
        </div>
        <div className={styles.inventory}>
          {
            inventory.map(inventoryItem => {
              return <InventoryItem {...inventoryItem} />
            })
          }

        </div>
      </div>

    </div >
  )
}