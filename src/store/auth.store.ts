import { create } from "zustand"

interface IAuthStore {
  isAuthenticated: boolean
  handleAuthentication: (value: boolean) => void
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthenticated: false,

  handleAuthentication: () =>
    set((state) => ({ isAuthenticated: !state.isAuthenticated })),
}))
