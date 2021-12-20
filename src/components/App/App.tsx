import { Label } from 'components';
import styles from './styles.module.css';

export const App = () => {
  return (
    <div className={styles.app}>
      App
      <Label>Hello World from App</Label>
    </div>
  );
};
