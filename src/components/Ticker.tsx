import styles from './Ticker.module.css'

const items = [
  'Diseño a medida',
  'Sin plantillas genéricas',
  'Entrega en 5 días',
  '100% responsive',
  'Optimizado para conversión',
  'Código real, no Linktree',
]

function Ticker() {
  const allItems = [...items, ...items]

  return (
    <div className={styles.ticker}>
      <div className={styles.track}>
        {allItems.map((item, index) => (
          <span className={styles.item} key={index}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Ticker
