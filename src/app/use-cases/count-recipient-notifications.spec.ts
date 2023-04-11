/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notifications-factory';

describe('count recipient notification', () => {
    it('should be able to count recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const countRecipientNotifications = new CountRecipientNotifications(notificationsRepository);

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }))

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }))

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-2' }))


        const { count } = await countRecipientNotifications.execute({
            recipientId: "recipient-1",
        });
        ;

        expect(count).toEqual(2);

    });

});
