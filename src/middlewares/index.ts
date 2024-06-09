import { excludePaths, getUser, verifyJWT } from './authentication'

const middlewares = [excludePaths, verifyJWT, getUser]

export default middlewares
