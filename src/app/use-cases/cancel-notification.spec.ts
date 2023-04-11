/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from './cancel-notification';
import { Notification } from '@app/entities/notification';
import { Content } from '@app/entities/content';
import { NotificationNotFound } from './errors/notification-not-found';

describe('cancel notification', () => {
    it('should be able to cancel a notification', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        const notification = new Notification({
            category: 'social',
            content: new Content('social'),
            recipientId: "exemple-recipient-id",
        })

        await notificationsRepository.create(notification)

        await cancelNotification.execute({
            notificationId: notification.Id
        });

        expect(notificationsRepository.notifications[0].cancelAt).toEqual(expect.any(Date));
    });

    it('should not be able to cancel a notification when it does not exist', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification(notificationsRepository);

        expect(() => {
            return cancelNotification.execute({
                notificationId: "fake-notification-id"
            })
        }).rejects.toThrow(NotificationNotFound)
    })
});
