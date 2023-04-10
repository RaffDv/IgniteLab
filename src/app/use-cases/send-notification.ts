/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
<<<<<<< HEAD
import { NotificationsRepository } from '../repositories/notifications-repository';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  // eslint-disable-next-line prettier/prettier
  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { category, content, recipientId } = request;
=======
import { NotificationsRepository } from '../repositories/notification-repository';

interface sendNotificationRequest {
  recipientId: string,
  content: string,
  category: string
}

interface sendNotificationResponse {
  notification: Notification;
}
@Injectable()
export class SendNotification {
  constructor(private notificationRepository: NotificationsRepository) { }

  async execute(
    request: sendNotificationRequest,
  ): Promise<sendNotificationResponse> {
    const { recipientId, category, content } = request;
>>>>>>> 1446384a0d7b16b7b9fed3888cf55fae654df290

    const notification = new Notification({
      category,
      content: new Content(content),
      recipientId,
    });

<<<<<<< HEAD
    // persistir notification no bd

    await this.notificationsRepository.create(notification);

=======
    await this.notificationRepository.create(notification);
>>>>>>> 1446384a0d7b16b7b9fed3888cf55fae654df290
    return {
      notification,
    };
  }
}
