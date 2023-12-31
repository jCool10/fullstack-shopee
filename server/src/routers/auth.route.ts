import { Router } from 'express'
import { AuthController } from '~/controllers/auth.controller'
import asyncHandler from '~/helpers/asyncHandler'
// import AccessController from '~/controllers/access.controller'

const router: Router = Router()

router.post('login', asyncHandler(AuthController.login))

export default router
