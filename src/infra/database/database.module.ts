/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';

import { PrismaService } from './Prisma/prisma.service';
import { NotificationsRepository } from 'src/app/repositories/notification-repository';
import { PrismaNotificationsRespository } from './Prisma/repositories/prisma-notifications-repository';

@Module({
    providers: [PrismaService, {
        provide: NotificationsRepository,
        useClass: PrismaNotificationsRespository
    }],
    exports: [
        NotificationsRepository
    ]
})
export class DatabaseModule { }
