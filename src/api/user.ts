import { apiClient } from '@/utils/libs/apiClient'
import { StateController, UserController } from '@/utils/libs/requestUrls'
import { setToken } from '@/utils/libs/setToken'
import { GetServerSidePropsContext } from 'next'
import { toast } from 'react-toastify'

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

export const getStudentList = async (
  grade?: number,
  group?: number,
  name?: string,
) => {
  try {
    const { data } = await apiClient.get(StateController.getLocation, {
      params: {
        grade: grade,
        group: group,
        name: name,
      },
    })
    console.log(data)
    return data
  } catch (e) {
    console.log(e)
  }
}

export const setStudentInfo = async (where: string) => {
  try {
    const { data } = await apiClient.post(StateController.setLocation, {
      where: where,
    })
    return data
  } catch (e) {
    toast.error('알 수 없는 오류입니다')
  }
}
