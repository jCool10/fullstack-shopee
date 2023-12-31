import { Router } from 'express'
import AuthRoute from './auth.route'

const router: Router = Router()

// router.use('/access', AccessRoute)
router.use('/auth', AuthRoute)

export default router
