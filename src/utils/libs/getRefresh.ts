import { InternalAxiosRequestConfig } from 'axios'
import { getToken } from './getToken'

export const getRefresh = async (config: InternalAxiosRequestConfig) => {
  if (!config.headers) return config
  const { Authorization, Refresh } = await getToken(null)

  if (config.headers && Authorization) {
    config.headers['Authorization'] = Authorization
  }

  return config
}
