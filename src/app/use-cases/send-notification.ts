import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepository } from '../repositories/notification-repository';

interface sendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface sendNotificationResponse {
  notification: Notification;
}

export class sendNotification {
  // eslint-disable-next-line prettier/prettier
  constructor(private notificationRepository: NotificationsRepository) { }

  async execute(
    request: sendNotificationRequest,
  ): Promise<sendNotificationResponse> {
    const { recipientId, category, content } = request;
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationRepository.create(notification);
    return {
      notification,
    };
  }
}
