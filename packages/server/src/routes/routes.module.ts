import { Module } from '@nestjs/common'
import { DbModule } from '../../../db/dist'
import { UsersController } from './users/users.controller'
import { UsersService } from './users/users.service'

@Module({
  imports: [DbModule],
  providers: [UsersService],
  controllers: [UsersController],
})
export class RoutesModule {}
