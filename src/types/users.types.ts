export enum ERole {
  USER = "USER",
  ADMIN = "ADMIN",
}

export type TUser = {
  id?: string
  first_name: string
  last_name: string
  email: string
  username: string
  password?: string
  role: ERole
}
