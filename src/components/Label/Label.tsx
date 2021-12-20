import styles from './styles.module.css';

export interface LabelProps {
  children: React.ReactNode;
}

export const Label = ({ children }: LabelProps) => {
  return <div className={styles.label}>{children}</div>;
};
