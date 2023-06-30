import { GetServerSidePropsContext } from 'next'
import { apiClient } from '@/utils/libs/apiClient'
import { toast } from 'react-toastify'
import { setToken } from '@/utils/libs/setToken'
import { UserController } from '@/utils/libs/requestUrls'

export const login = async (
  email: string | undefined,
  password: string | undefined,
) => {
  try {
    const { data } = await apiClient.post(UserController.login, {
      email: email,
      password: password,
    })
    setToken(data.access, data.refresh, null)
    return toast.success('로그인이 되었습니다.')
  } catch (e: any) {
    console.log(e)
    if (e.message === 'Request failed with status code 400') {
      toast.warning('이메일 또는 비밀번호가 다릅니다.')
    }
    return false
  }
}

export const tokenRefresh = async (
  refreshToken: string | undefined,
  ctx: GetServerSidePropsContext | null,
) => {
  let newAuthorization: string
  try {
    const { data } = await apiClient.post(UserController.refresh, {
      refresh: refreshToken,
    })
    newAuthorization = data.accessToken
    refreshToken = data.refreshToken
    console.log('tokenrefresh')
    setToken(newAuthorization, refreshToken, ctx)
    return { newAuthorization }
  } catch (e: any) {
    console.log('tokenrefresh fail')
  }
}
