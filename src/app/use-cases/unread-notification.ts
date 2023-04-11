/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notification-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface unReadNotificationRequest {
    notificationId: string
}

type unReadNotificationResponse = void

@Injectable()
export class unReadNotification {
    constructor(private notificationRepository: NotificationsRepository) { }

    async execute(request: unReadNotificationRequest): Promise<unReadNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationRepository.findById(notificationId);

        if (!notification) {
            throw new NotificationNotFound();
        }
        notification.unRead();
        await this.notificationRepository.save(notification)
    }
}
