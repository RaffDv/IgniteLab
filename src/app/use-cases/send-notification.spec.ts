import { NotificationsRepo } from '../repositories/notification-repository';
import { sendNotification } from './send-notification';
const notificationRepository: NotificationsRepo[] = []
describe('send notification', () => {
  it('should send a notification', async () => {
    const sendNotification = new sendNotification();
    const { notification } = await sendNotification.execute({
      category: 'social',
      content: 'this is a social notification',
      recipientId: '123',
    });

    expect(notification).toBeTruthy();
  });
});
