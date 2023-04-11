/* eslint-disable prettier/prettier */
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notification-repository';


export class InMemoryNotificationsRepository implements NotificationsRepository {


    public notifications: Notification[] = [];

    async findById(notificationId: string): Promise<Notification | null> {
        const notification = this.notifications.find(item => item.Id === notificationId)
        if (!notification) {
            return null;
        }
        return notification;
    }
    async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        return this.notifications.filter(notifications => notifications.recipientId === recipientId);
    }

    async countManyByRecipientId(recipientId: string): Promise<number> {
        return this.notifications.filter(notification => notification.recipientId === recipientId).length
    }

    async create(notification: Notification) {
        this.notifications.push(notification);
    }

    async save(notification: Notification): Promise<void> {
        const notificationIndex = this.notifications.findIndex(item => item.Id === notification.Id)

        if (notificationIndex >= 0) {
            this.notifications[notificationIndex] = notification;
        }

    }
}
