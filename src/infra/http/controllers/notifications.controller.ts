/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';

import { CreateNotificationBody } from '../DTOs/createNotificationBody';
import { SendNotification } from '../../../app/use-cases/send-notification';
import { NotificationViewModel } from '../view-models/notification-view-module';

@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) { }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId
    })

    return {
      notification: NotificationViewModel.toHTTP(notification)
    }
  }
}
