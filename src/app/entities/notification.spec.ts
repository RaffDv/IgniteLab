import { Content } from './content';
import { Notification } from './notification';

describe('Create Notification', () => {
  it('should be able to create a notification ', () => {
    const notification = new Notification({
      content: new Content('Voce tem uma nova notificacao'),
      recipientId: '1234567890',
      category: 'social',
    });

    expect(notification).toBeTruthy();
  });
});
