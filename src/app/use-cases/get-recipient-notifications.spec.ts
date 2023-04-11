/* eslint-disable prettier/prettier */
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { makeNotification } from '@test/factories/notifications-factory';
import { GetRecipientNotifications } from './get-recipient-notifications';

describe('gel all recipient notification', () => {
    it('should be able to get recipient notifications', async () => {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const getRecipientNotifications = new GetRecipientNotifications(notificationsRepository);

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }))

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }))

        await notificationsRepository.create(makeNotification({ recipientId: 'recipient-1' }))


        const { notifications } = await getRecipientNotifications.execute({ recipientId: 'recipient-1' })

        expect(notifications).toHaveLength(3);
        expect(notifications).toEqual(expect.arrayContaining([
            expect.objectContaining({ recipientId: 'recipient-1' }),
            expect.objectContaining({ recipientId: 'recipient-1' }),
            expect.objectContaining({ recipientId: 'recipient-1' })
        ]))

    });

});
