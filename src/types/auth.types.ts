import { ERole } from "./users.types"

export interface IAuth {
  username: string
  password: string
}

export interface ICreateUser extends IAuth {
  first_name: string
  last_name: string
  email: string
  repeat_password?: string
  role: ERole
}

export type TSignedToken = {
  sub: string
  username: string
  email: string
  first_name: string
  last_name: string
  role: ERole
}
