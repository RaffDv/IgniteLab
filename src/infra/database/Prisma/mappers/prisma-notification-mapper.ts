/* eslint-disable prettier/prettier */
import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { Notification as RawNotification } from '@prisma/client'
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
    static toDomain(raw: RawNotification): Notification {
        return new Notification({
            category: raw.Category,
            content: new Content(raw.Content),
            recipientId: raw.recipientId,
            readAt: raw.readAt,
            createdAt: raw.CreatedAt,
            canceledAt: raw.canceledAt
        }, raw.id)

    }
}
