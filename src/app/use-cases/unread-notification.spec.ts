/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notifications-factory';
import { ReadNotification } from './read-notification';
import { NotificationNotFound } from './errors/notification-not-found';
import { unReadNotification } from './unread-notification';


describe('unread notification', () => {
    it('should be able to unread a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const UnreadNotification = new unReadNotification(notificationsRepository);

        const notification = makeNotification({
            readAt: new Date()
        })

        await notificationsRepository.create(notification)

        await UnreadNotification.execute({
            notificationId: notification.Id
        });

        expect(notificationsRepository.notifications[0].readAt).toBeNull()
    });
    it('should not be able to cancel a notification when it does not exist', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const UnreadNotification = new unReadNotification(notificationsRepository);

        expect(() => {
            return UnreadNotification.execute({
                notificationId: "fake-notification-id"
            })
        }).rejects.toThrow(NotificationNotFound)
    })
});
