import { useFavorites } from '../../hooks/useFavorites';
import styles from './Header.module.css';
import { BsFillBagHeartFill } from 'react-icons/bs';
export default function Header() {
  const { favorites } = useFavorites();
  return (
    <header className={styles.header}>
      <BsFillBagHeartFill fontSize={20} />
      <span>{favorites.length}</span>
    </header>
  );
}
