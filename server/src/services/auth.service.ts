import { Request } from 'express'
import { AuthFailureError, NotFoundError } from '~/core/error.response'
import { findByEmail } from '~/database/repositories/auth.repo'
import bcrypt from 'bcrypt'
import crypto from 'crypto'

class authService {
  login = async (req: Request) => {
    const body: Login = req.body
    const { email, password } = body

    const foundShop = await findByEmail({ email })
    if (!foundShop) throw new NotFoundError('Shop not found')

    const isMatch = await bcrypt.compare(password, foundShop.password)
    if (!isMatch) throw new AuthFailureError('Authentication error')

    // 3. create private key, public key
    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 4096,
      publicKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
      },
      privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
      }
    })
    const { _id: userId } = foundShop

    const tokens = await createTokenPair(
      {
        userId: userId.toString(),
        email
      },
      publicKey,
      privateKey
    )

    return {}
  }
}

export const AuthService = new authService()
