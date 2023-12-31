import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksService } from './tasks/tasks.service';
import { AgreementsModule } from './agreements/agreements.module'

@Module({
  imports: [TaskModule, AgreementsModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class AppModule { }
