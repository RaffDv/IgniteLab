import { Notification } from '../entities/notification';
import { sendNotification } from './send-notification';

const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};
describe('send notification', () => {
  it('should be able send a notification', async () => {
    const SendNotification = new sendNotification(notificationsRepository);
    await SendNotification.execute({
      category: 'social',
      content: 'this is a social notification',
      recipientId: '123',
    });
    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
