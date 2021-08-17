import React from 'react';
import EventItem from './EventItem';

import classes from './EventListStyle.module.css';

function EventList({ items }) {
  return (
    <ul className={classes.list}>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        );
      })}
    </ul>
  );
}

export default EventList;
