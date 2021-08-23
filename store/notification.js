import { createContext, useState } from 'react';

const notificationContext = createContext({
  notification: null,
  showNotification: function () {},
  hideNotification: function () {},
});

export function notificationContextProvider(props) {
  return (
    <NotificationContextProvider>{props.children}</NotificationContextProvider>
  );
}

export default notificationContext;
