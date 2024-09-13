import { Alert, Pressable, StyleSheet, Text, View } from "react-native"

import { EColors } from "src/themes/colors"
import { IAuth } from "src/types/auth.types"
import Input from "src/components/input"
import { SafeAreaView } from "react-native-safe-area-context"
import { signin } from "src/services/auth.service"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"

export default function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<IAuth>()

  const onSubmit = async (values: IAuth) => {
    try {
      await signin(values)
    } catch (error) {
      if (error instanceof Error)
        Alert.alert("Ocurrió un error.", error.message)
    }
  }

  const { mutate } = useMutation({
    mutationKey: ["signin_mutation", getValues("username")],
    mutationFn: onSubmit,
  })

  return (
    <SafeAreaView style={form}>
      <Text style={form_title}>Iniciar sesión</Text>
      <View id="auth-form" style={form_input_container}>
        <Input
          label="Usuario"
          name="username"
          control={control}
          error={errors?.username?.message}
        />
        <Input
          label="Contraseña"
          name="password"
          control={control}
          secure
          error={errors?.password?.message}
        />
        <Pressable
          onPress={handleSubmit(mutate)}
          disabled={isSubmitting}
          style={({ pressed }) => [
            {
              backgroundColor:
                pressed || isSubmitting ? EColors.GREEN_500 : EColors.GREEN_400,
              borderRadius: 11,
            },
          ]}
        >
          {({ pressed }) => (
            <Text style={submit_button}>
              {pressed || isSubmitting ? "Autenticando..." : "Iniciar sesión"}
            </Text>
          )}
        </Pressable>
        <Pressable
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? EColors.GRAY_600 : EColors.GRAY_500,
              borderRadius: 11,
            },
          ]}
        >
          <Text style={submit_button}>Crear cuenta</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  )
}

const { form, form_title, form_input_container, submit_button } =
  StyleSheet.create({
    form: {
      flexDirection: "column",
      alignItems: "center",
      gap: 32,
    },
    form_title: {
      fontSize: 20,
    },
    form_input_container: {
      flexDirection: "column",
      gap: 32,
    },
    submit_button: {
      paddingVertical: 12,
      fontSize: 18,
      color: "white",
      fontWeight: "600",
      textAlign: "center",
    },
  })
