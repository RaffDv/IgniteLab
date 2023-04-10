import { sandNotification } from './send-notification';

describe('send notification', () => {
  it('should send a notification', async () => {
    const sendNotification = new sandNotification();
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: ' voce tem um novo pedido de amizade',
      recipientId: '123',
    });
    console.log(notification);

    expect(notification).toBeTruthy();
  });
});
