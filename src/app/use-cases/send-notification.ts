import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface sandNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface sandNotificationResponse {
  notification: Notification;
}

export class sandNotification {
  async execute(
    request: sandNotificationRequest,
  ): Promise<sandNotificationResponse> {
    const { recipientId, category, content } = request;
    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });
    return {
      notification,
    };
  }
}
