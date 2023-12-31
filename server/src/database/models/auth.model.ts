'use strict '

import { Schema, model } from 'mongoose'

const DOCUMENT_NAME = 'Auth'
const COLLECTION_NAME = 'Auth'

const authSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 150
    },
    email: {
      type: String,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive'
    },
    verify: {
      type: Schema.Types.Boolean,
      default: false
    },
    role: {
      type: Array,
      default: []
    }
  },
  { timestamps: true, collection: COLLECTION_NAME }
)

// module.exports = model(DOCUMENT_NAME, authSchema)
export const AuthModel = model(DOCUMENT_NAME, authSchema)
