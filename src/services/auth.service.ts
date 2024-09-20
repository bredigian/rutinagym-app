import { IAuth, ICreateUser } from "src/types/auth.types"

import { API_ERROR_MESSAGE } from "src/utils/messages"
import { API_URL } from "src/env/env"

export const signin = async (payload: IAuth) => {
  const options: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }
  const PATH = `${API_URL}/v1/auth/signin`
  const res = await fetch(PATH, options)
  const data = await res.json()
  if (!res.ok) {
    const { message } = data
    throw new Error(message ?? API_ERROR_MESSAGE)
  }

  return data
}

export const signup = async (payload: ICreateUser) => {
  const options: RequestInit = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }
  const PATH = `${API_URL}/v1/auth/signup`
  const res = await fetch(PATH, options)
  const data = await res.json()
  if (!res.ok) {
    const { message } = data
    throw new Error(message ?? API_ERROR_MESSAGE)
  }

  return data
}

export const validateToken = async (token: string) => {
  const options: RequestInit = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const PATH = `${API_URL}/v1/auth/validate`
  const res = await fetch(PATH, options)
  const data = await res.json()
  if (!res.ok) throw new Error(data.message ?? API_ERROR_MESSAGE)

  return data
}
