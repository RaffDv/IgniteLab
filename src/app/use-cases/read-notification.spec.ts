/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notifications-factory';
import { ReadNotification } from './read-notification';
import { NotificationNotFound } from './errors/notification-not-found';


describe('read notification', () => {
    it('should be able to read a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const readNotification = new ReadNotification(notificationsRepository);

        const notification = makeNotification()

        await notificationsRepository.create(notification)

        await readNotification.execute({
            notificationId: notification.Id
        });

        expect(notificationsRepository.notifications[0].readAt).toEqual(expect.any(Date));
    });
    it('should not be able to cancel a notification when it does not exist', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const readNotification = new ReadNotification(notificationsRepository);

        expect(() => {
            return readNotification.execute({
                notificationId: "fake-notification-id"
            })
        }).rejects.toThrow(NotificationNotFound)
    })
});
