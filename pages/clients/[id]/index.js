import React from 'react';
import { useRouter } from 'next/router';

function ClientsProjectsPage() {
  const router = useRouter();
  console.log(router.query);

  const loadProject = () => {
    // load data...
    router.push('/clients/max/projectA');
    router.push({
      pathname: '/clients/[id]/[clientsProjectId]',
      query: { id: 'max', clientsProjectId: 'projectA' },
    });
  };

  return (
    <div>
      <h1>The Projects of a Given Clients</h1>
      <button onClick={loadProject}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectsPage;
