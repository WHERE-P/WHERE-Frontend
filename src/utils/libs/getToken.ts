import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'
import { tokenRefresh } from '@/api/user'

export const getToken = async (ctx: GetServerSidePropsContext | null) => {
  if (ctx) {
    let Authorization = ctx.req.cookies['Authorization'] || ''
    let Refresh = ctx.req.cookies['Refresh'] || ''

    if (!Refresh) return {}
    else if (!Authorization) {
      const { newAuthorization }: any = await tokenRefresh(Refresh, ctx)
      Authorization = newAuthorization
    }

    return { Authorization, Refresh }
  } else {
    const { Authorization, Refresh } = parseCookies()
    return { Authorization, Refresh }
  }
}
