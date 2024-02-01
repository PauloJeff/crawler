import { AxiosError } from "axios"
import { client, ResponseAPI } from "../api"

const getProduct = async (url:string): Promise<ResponseAPI> => {
  try {
    const {data} = await client.get(`?url=${url}`)

    return data
  } catch(error) {
    const err = error as AxiosError
    if (err.response) {
      console.log(err.response.data)
      console.log(err.response.status)
      console.log(err.response.headers)
    }

    throw new Error(err.message)
  }
}

export default getProduct