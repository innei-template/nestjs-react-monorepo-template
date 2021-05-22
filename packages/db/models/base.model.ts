import {
  index,
  modelOptions,
  plugin,
  prop,
  Severity,
} from '@typegoose/typegoose'
import * as mongooseLeanVirtuals from 'mongoose-lean-virtuals'

@modelOptions({
  schemaOptions: { _id: false },
})
class Image {
  @prop()
  width?: number

  @prop()
  height?: number

  @prop()
  accent?: string

  @prop()
  type?: string

  @prop()
  src: string
}

export type { Image as TextImageModelType }

@plugin(mongooseLeanVirtuals)
@modelOptions({
  schemaOptions: {
    timestamps: {
      createdAt: 'created',
      updatedAt: false,
    },
    toJSON: {
      versionKey: false,
      virtuals: true,
    },
    toObject: {
      versionKey: false,
      virtuals: true,
    },
  },
  options: { allowMixed: Severity.ALLOW },
})
@index({ created: -1 })
export abstract class BaseModel {
  created?: Date
}
