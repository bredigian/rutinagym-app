import Hero from "src/components/hero"
import { SafeAreaView } from "react-native-safe-area-context"
import { TUser } from "src/types/users.types"
import { useAuthStore } from "src/store/auth.store"

export default function Home() {
  const { userdata } = useAuthStore()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        padding: 32,
        backgroundColor: "white",
      }}
    >
      <Hero userdata={userdata as TUser} />
    </SafeAreaView>
  )
}
