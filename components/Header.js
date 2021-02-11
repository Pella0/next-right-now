import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <nav>
        <ul className={styles.menu}>
          <li className={styles.menuItem}>
            <Link href="/">
              <a href="" className={styles.link}>
                Home
              </a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/dynamic-content">
              <a className={styles.link}>Dynamic content</a>
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link href="/about">
              <a className={styles.link}>About Us</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
