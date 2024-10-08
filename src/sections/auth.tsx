import { Alert, Pressable, StyleSheet, Text, View } from "react-native"
import { ERole, TUser } from "src/types/users.types"
import { IAuth, ICreateUser, TSignedToken } from "src/types/auth.types"
import { signin, signup } from "src/services/auth.service"
import { useController, useForm } from "react-hook-form"

import { EColors } from "src/themes/colors"
import Input from "src/components/input"
import { Link } from "expo-router"
import { jwtDecode } from "jwt-decode"
import { setItemAsync } from "expo-secure-store"
import { useAuthStore } from "src/store/auth.store"
import { useMutation } from "@tanstack/react-query"

export function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<IAuth>()

  const { authenticate } = useAuthStore()

  const onSubmit = async (values: IAuth) => {
    try {
      const { access_token } = await signin(values)

      await setItemAsync("session_token", access_token)
      const userdata: TSignedToken = jwtDecode(access_token)
      authenticate(userdata)
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
    <View style={[form, { paddingHorizontal: 32 }]}>
      <Text style={form_title}>Iniciar sesión</Text>
      <View id="auth-form" style={form_input_container}>
        <Input
          label="Usuario"
          controller={useController<IAuth>({
            name: "username",
            control,
            rules: {
              required: { value: true, message: "El usuario es requerido." },
              minLength: { value: 6, message: "Debe tener al menos 6 carac." },
            },
          })}
          error={errors?.username?.message}
        />
        <Input
          label="Contraseña"
          controller={useController<IAuth>({
            name: "password",
            control,
            rules: {
              required: { value: true, message: "La contraseña es requerida." },
              minLength: { value: 6, message: "Debe tener al menos 6 carac." },
            },
          })}
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
          <Link href={"/signup"} style={submit_button}>
            Crear cuenta
          </Link>
        </Pressable>
        <Link
          href={"/recover"}
          style={{
            textDecorationLine: "underline",
            textAlign: "center",
          }}
        >
          Olvidé la contraseña
        </Link>
      </View>
    </View>
  )
}

export function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<ICreateUser>()

  const onSubmit = async (values: ICreateUser) => {
    try {
      const FORMATTED_VALUES: ICreateUser = {
        ...values,
        first_name: values.first_name
          .charAt(0)
          .toUpperCase()
          .concat(values.first_name.substring(1).toLowerCase())
          .trim(),
        last_name: values.last_name
          .charAt(0)
          .toUpperCase()
          .concat(values.last_name.substring(1).toLowerCase())
          .trim(),
        username: values.username.toLowerCase().trim(),
        email: values.email.toLowerCase(),
        role: ERole.USER,
        repeat_password: undefined,
      }

      await signup(FORMATTED_VALUES)
    } catch (error) {
      if (error instanceof Error)
        Alert.alert("Ocurrió un error.", error.message)
    }
  }

  const { mutate } = useMutation({
    mutationKey: ["signup_mutation", getValues("email")],
    mutationFn: onSubmit,
  })

  return (
    <View
      id="register-form"
      style={[form_input_container, { paddingVertical: 24 }]}
    >
      <Input
        label="Nombre"
        controller={useController<ICreateUser>({
          name: "first_name",
          control,
          rules: {
            required: { value: true, message: "El nombre es requerido." },
          },
        })}
        error={errors?.first_name?.message}
      />
      <Input
        label="Apellido"
        controller={useController<ICreateUser>({
          name: "last_name",
          control,
          rules: {
            required: { value: true, message: "El apellido es requerido." },
          },
        })}
        error={errors?.last_name?.message}
      />
      <Input
        label="Email"
        controller={useController<ICreateUser>({
          name: "email",
          control,
          rules: {
            required: { value: true, message: "El email es requerido." },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "El email no es válido.",
            },
          },
        })}
        error={errors?.email?.message}
      />
      <Input
        label="Usuario"
        controller={useController<ICreateUser>({
          name: "username",
          control,
          rules: {
            required: { value: true, message: "El usuario es requerido." },
            pattern: {
              value: /^\S+$/,
              message: "El usuario no puede contener espacios.",
            },
          },
        })}
        error={errors?.username?.message}
      />
      <Input
        label="Contraseña"
        controller={useController<ICreateUser>({
          name: "password",
          control,
          rules: {
            required: { value: true, message: "La contraseña es requerida." },
          },
        })}
        secure
        error={errors?.password?.message}
      />
      <Input
        label="Repetir contraseña"
        controller={useController<ICreateUser>({
          name: "repeat_password",
          control,
          rules: {
            required: { value: true, message: "La contraseña es requerida." },
            validate: (value) =>
              value === getValues("password") ||
              "Las contraseñas no coinciden.",
          },
        })}
        secure
        error={errors?.repeat_password?.message}
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
            {pressed || isSubmitting ? "Registrandose..." : "Registarse"}
          </Text>
        )}
      </Pressable>
    </View>
  )
}

const { form, form_title, form_input_container, submit_button } =
  StyleSheet.create({
    form: {
      flexDirection: "column",
      alignItems: "center",
      gap: 32,
      paddingBottom: 32,
      width: "100%",
    },
    form_title: {
      fontSize: 20,
    },
    form_input_container: {
      flexDirection: "column",
      gap: 32,
      width: "100%",
      paddingHorizontal: 32,
    },
    submit_button: {
      paddingVertical: 12,
      fontSize: 18,
      color: "white",
      fontWeight: "600",
      textAlign: "center",
    },
  })
