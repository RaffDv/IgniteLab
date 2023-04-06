import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationsRepo } from '../repositories/notification-repository';

interface sandNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface sandNotificationResponse {
  notification: Notification;
}

export class sandNotification {
  constructor(private notificationRepo: NotificationsRepo) {}

  async execute(
    request: sandNotificationRequest,
  ): Promise<sandNotificationResponse> {
    const { recipientId, category, content } = request;
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    await this.notificationRepo.create(notification);
    return {
      notification,
    };
  }
}
