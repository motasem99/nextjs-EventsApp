import { Fragment } from 'react';
import { getAllEvents } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import EventsSearch from '../../components/events/EventsSearch';

function EventsPage({ events }) {
  return (
    <Fragment>
      <EventsSearch />
      <EventList items={events} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
    revalidate: 60,
  };
}

export default EventsPage;
