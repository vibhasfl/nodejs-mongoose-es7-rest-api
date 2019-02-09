import express from 'express'
import { users } from './users.controller'
import { asyncWrapper } from '../../utils/asyncWrapper'
import { validate } from '../../utils/validate'
import { newuser } from './user.validations'

const userRoutes = express.Router()

userRoutes.get('/', asyncWrapper(users.index))
userRoutes.post('/', validate(newuser), asyncWrapper(users.create))
userRoutes.put('/:id', asyncWrapper(users.update))

export { userRoutes }
