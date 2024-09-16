import { Slot, useRouter } from "expo-router"

import { ERole } from "src/types/users.types"
import { useAuthStore } from "src/store/auth.store"
import { useEffect } from "react"

export default function ProtectedLayout() {
  const { userdata } = useAuthStore()
  const { replace } = useRouter()

  useEffect(() => {
    if (userdata?.role === ERole.ADMIN) replace("(admin)")
    else replace("(user)")
  }, [])

  return <Slot />
}
