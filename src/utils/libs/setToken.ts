import { GetServerSidePropsContext } from 'next'
import { setCookie } from 'nookies'

export const setToken = (
  Authorization: string,
  RefreshToken: string | undefined,
  ctx: GetServerSidePropsContext | null,
): void => {
  setCookie(ctx, 'Authorization', `${Authorization}`, {
    maxAge: 86400,
    path: '/',
  }) // 1일
  setCookie(ctx, 'Refresh', `${RefreshToken}`, {
    maxAge: 604800,
    path: '/',
  }) // 7일
}
