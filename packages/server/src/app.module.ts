import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DbModule } from '@yumi/db'
import { RoutesModule } from './routes/routes.module'

@Module({
  imports: [DbModule, RoutesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
