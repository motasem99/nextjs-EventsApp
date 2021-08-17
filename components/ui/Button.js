import Link from 'next/link';
import ArrowIcon from '../icons/arrow-right-icon';
import styles from '../events/EventItemStyle.module.css';
import classes from './ButtonStyle.module.css';

function Button({ link }) {
  return (
    <Link href={link}>
      <a className={classes.btn}>
        <span>Explore Event</span>
        <span className={styles.icon}>
          <ArrowIcon />
        </span>
      </a>
    </Link>
  );
}

export default Button;
