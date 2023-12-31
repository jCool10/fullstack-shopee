import { NextFunction, Request, Response } from 'express'
import { SuccessResponse } from '~/core/success.response'
import asyncCatch from '~/helpers/cathAsync'
import { AuthService } from '~/services/auth.service'

class authController {
  login = asyncCatch(async (req: Request, res: Response, next: NextFunction) => {
    new SuccessResponse({ message: 'Login success!', data: AuthService.login(req) }).send(res)
  })
}

export const AuthController = new authController()
