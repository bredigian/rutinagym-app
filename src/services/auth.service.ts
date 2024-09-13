import { API_URL } from "src/env/env"
import { IAuth } from "src/types/auth.types"

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
    throw new Error(message ?? "Ocurrió un error.")
  }

  return data
}
