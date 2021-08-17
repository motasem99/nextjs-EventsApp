import React from 'react';
import EventItem from './EventItem';

function EventList({ items }) {
  //   const { items } = props;

  return (
    <ul>
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
