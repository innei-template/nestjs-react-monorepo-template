import { UserModel } from './models/user.model'
import { TypegooseModule } from 'nestjs-typegoose'
import { Module } from '@nestjs/common'
const models = TypegooseModule.forFeature([UserModel])

@Module({
  imports: [
    TypegooseModule.forRootAsync({
      useFactory: () => ({
        uri: (process.env.DB_URL || 'mongodb://localhost') + '/yumi',
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: true,
      }),
    }),
    models,
  ],
  exports: [models],
})
export class DbModule {}
