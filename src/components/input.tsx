import { Control, UseControllerProps, useController } from "react-hook-form"
import { StyleSheet, Text, TextInput, View } from "react-native"

import { EColors } from "src/themes/colors"
import { IAuth } from "src/types/auth.types"

type TProps = {
  name: keyof IAuth
  label: string
  control: Control<IAuth>
  secure?: boolean
  error?: string
}

export default function Input({ label, name, control, secure, error }: TProps) {
  const { field } = useController<IAuth>({
    control,
    name,
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "El campo es requerido.",
      },
      minLength: {
        value: 10,
        message: "Debe tener al menos 10 caract.",
      },
    },
  })
  return (
    <View style={container}>
      <View style={input_label_container}>
        <Text style={input_label}>{label}</Text>
        <Text style={input_error}>{error ?? ""}</Text>
      </View>
      <TextInput
        style={[
          input,
          { borderWidth: 2, borderColor: !error ? "transparent" : "red" },
        ]}
        value={field.value}
        onChangeText={field.onChange}
        secureTextEntry={secure ? true : false}
      />
    </View>
  )
}

const { container, input_label_container, input_error, input_label, input } =
  StyleSheet.create({
    container: {
      flexDirection: "column",
      gap: 8,
    },
    input_label_container: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 4,
    },
    input_label: {
      fontSize: 14,
    },
    input_error: {
      color: "red",
    },
    input: {
      backgroundColor: EColors.GRAY_200,
      width: 290,
      fontSize: 16,
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 11,
    },
  })
