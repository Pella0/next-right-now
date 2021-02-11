import { useState, useEffect } from 'react';
import styles from './OfflineBanner.module.css';

export default function OfflineBanner() {
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    setInterval(() => setConnected(window.navigator.onLine), 500);
  }, []);

  return (
    !connected && (
      <div className={styles.banner}>No connection found, working offline</div>
    )
  );
}
