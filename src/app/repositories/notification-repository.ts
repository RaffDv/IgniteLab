import { Notification } from '../entities/notification';

export abstract class NotificationsRepo {
  abstract create(notification: Notification): Promise<void>;
}
