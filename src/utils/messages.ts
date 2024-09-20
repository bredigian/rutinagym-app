export const API_ERROR_MESSAGE =
  "Se produjo un error al intentar conectar con el servidor."

export const isNetworkError = (message: string) =>
  message === "Network request failed"
