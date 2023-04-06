import { sandNotification } from './send-notification';

describe('send notification', () => {
  it('should send a notification', async () => {
    const sendNotification = new sandNotification();
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'this is a social notification',
      recipientId: '123',
    });

    expect(notification).toBeTruthy();
  });
});
