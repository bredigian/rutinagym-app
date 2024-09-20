import { Text, View } from "react-native"

import { EColors } from "src/themes/colors"
import { TUser } from "src/types/users.types"

type Props = {
  userdata: TUser
}

export default function Hero({ userdata }: Props) {
  const USER_INITIALS = userdata?.first_name
    .charAt(0)
    .concat(userdata?.last_name.charAt(0))
    .toUpperCase()

  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: 40,
          height: 40,
          backgroundColor: "#2c2c2c",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "white", fontSize: 20 }}>{USER_INITIALS}</Text>
      </View>
      <View style={{ flexDirection: "row", gap: 4 }}>
        <Text style={{ fontSize: 16 }}>Hola</Text>
        <Text style={{ fontSize: 16, color: EColors.GREEN_400 }}>
          {userdata?.username}
        </Text>
      </View>
    </View>
  )
}
