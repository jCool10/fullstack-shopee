import { AuthModel } from '../models/auth.model'

const findByEmail = async ({ email }: { email: string }) => await AuthModel.findOne({ email }).lean()

export { findByEmail }
