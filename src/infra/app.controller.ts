import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './createNotificationBody';
@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { Category, Content, recipientId } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        Category,
        Content,
        recipientId,
      },
    });
  }
}
