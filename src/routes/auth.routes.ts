import { Router } from 'express'
import Auth from '../apis/auth/auth'

const router = Router()

router.get('/', (_, res) => {
  res.send('welcome to auth')
})

// router.post('/refresh_token', Auth.refresh)

router.post('/login', Auth.login)

//Update Account Passwords
router.post('/account/password/change', Auth.changePassword)

//forgot Password
router.post('/forgot_password', Auth.forgotPassword)
router.post('/otp/verify', Auth.verifyOTP)
router.post('/reset-password', Auth.resetPassword)

export default router
