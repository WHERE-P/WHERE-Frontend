import axios from 'axios'
import { getRefresh } from './getRefresh'

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
})

apiClient.interceptors.request.use(getRefresh)
