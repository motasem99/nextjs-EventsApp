import { createContext, useState } from 'react';

const notificationContext = createContext({
  notification: null,
  showNotification: function (notificationData) {},
  hideNotification: function () {},
});

export function notificationContextProvider(props) {
  const [activeNotification, setActiveNotification] = useState();

  const showNotificationHandler = (notificationData) => {
    setActiveNotification(notificationData);
  };

  const hideNotificationHandler = () => {
    setActiveNotification(null);
  };

  const context = {
    notification: activeNotification,
    showNotification: showNotificationHandler,
    hideNotification: hideNotificationHandler,
  };

  return (
    <NotificationContextProvider value={context}>
      {props.children}
    </NotificationContextProvider>
  );
}

export default notificationContext;
