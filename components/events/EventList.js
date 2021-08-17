import React from 'react';
import EventItem from './EventItem';

function EventList({ items }) {
  return (
    <ul>
      {items.map((event) => {
        return <EventItem />;
      })}
    </ul>
  );
}

export default EventList;
