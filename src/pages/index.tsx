import StuList from '@/components/Home/organisms/StuList'
import { HomeTemplate } from '@/components/Home/templates/style'
import Header from '@/components/common/Header'
import { getToken } from '@/utils/libs/getToken'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const HomePage = () => {
  const router = useRouter()

  const isToken = async () => {
    const { Authorization } = await getToken(null)
    if (!Authorization) router.push('/login')
  }
  useEffect(() => {
    isToken()
  }, [])
  return (
    <HomeTemplate>
      <Header />
      <StuList />
    </HomeTemplate>
  )
}

export default HomePage
