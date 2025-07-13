import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/task.module';

@Module({
  imports: [UsersModule, TasksModule],
})
export class AppModule {}
