import { TSignedToken } from "src/types/auth.types"
import { TUser } from "src/types/users.types"
import { create } from "zustand"

interface IAuthStore {
  isAuthenticated: boolean
  userdata: TUser | null

  authenticate: (value: TSignedToken) => void
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthenticated: false,
  userdata: null,

  authenticate: (userdata: TSignedToken) => {
    set({ isAuthenticated: true, userdata: { ...userdata, id: userdata.sub } })
  },
}))
