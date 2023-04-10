/* eslint-disable prettier/prettier */
import { Notification } from '@app/entities/notification';

export class PrismaNotificationMapper {
    static toPrisma(notification: Notification) {
        return {
            id: notification.Id,
            Content: notification.content.value,
            Category: notification.category,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            CreatedAt: notification.createdAt,
        }
    }
}
