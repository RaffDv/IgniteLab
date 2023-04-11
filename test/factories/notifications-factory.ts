import { Content } from '@app/entities/content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;
/* eslint-disable prettier/prettier */
export function makeNotification(override: Override = {}) {
    return new Notification({
        category: 'social',
        content: new Content('social'),
        recipientId: 'exemple-recipient-id-2',
        ...override
    });
}
