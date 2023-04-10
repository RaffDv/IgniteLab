/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../app/entities/notification';
import { NotificationsRepository } from '../../../../app/repositories/notification-repository';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationsRespository implements NotificationsRepository {
    constructor(private prismaService: PrismaService) {

    }

    async create(notification: Notification): Promise<void> {
        await this.prismaService.notification.create({
            data: {
                id: notification.Id,
                Content: notification.content.value,
                Category: notification.category,
                recipientId: notification.recipientId,
                readAt: notification.readAt,
                CreatedAt: notification.createdAt
            }
        })
    }
}
