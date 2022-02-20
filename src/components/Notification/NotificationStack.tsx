import { selectMessage } from '@redux/message/message.slice';
import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';

import Notification from './Notification';

export default function NotificationStack() {
  const messages = useSelector(selectMessage);
  return (
    <>
      {messages.length !== 0 && (
        <View
          style={{
            position: 'absolute',
            width: '90%',
            alignSelf: 'center',
            bottom: 0,
          }}>
          {messages.map(message => {
            return <Notification key={message.id} message={message} />;
          })}
        </View>
      )}
    </>
  );
}
