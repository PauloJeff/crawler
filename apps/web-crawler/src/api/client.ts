import axios from 'axios'

export const client = axios.create({
  baseURL: "http://localhost:3000/api/product"
})

export interface ResponseAPI {
  name: string
  barcode: string
  brand: string
  image: string
  price: number
}