import { BaseModel } from './base.model'
import { prop } from '@typegoose/typegoose'
import { hashSync } from 'bcrypt'

export class UserModel extends BaseModel {
  @prop({ required: true, unique: true, maxlength: 20 })
  username: string

  name: string

  @prop({
    required: true,
    minlength: 8,
    select: false,
    get(v) {
      return v
    },
    set(v) {
      return hashSync(v, 6)
    },
  })
  password: string

  lastLoggIn: Date

  email?: string

  avatar?: string
  // TODO role
  role?: string
}
