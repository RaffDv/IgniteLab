import { Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('')
  getNotifications() {
    return this.prisma.notification.findMany();
  }
  @Post('')
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        Content: 'você tem notificações não lidas',
        Category: 'Social',
        recipientId: randomUUID(),
      },
    });
  }
}
