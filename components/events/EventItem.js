import Image from 'next/image';
import Button from '../ui/Button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import classes from './EventItemStyle.module.css';

function EventItem({ title, image, date, location, id }) {
  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={'/' + image} alt={title} width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.Summary}>
          <h2>{title}</h2>
          <div className={classes.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink} />
        </div>
      </div>
    </li>
  );
}

export default EventItem;
