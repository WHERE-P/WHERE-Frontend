import StuList from '@/components/Home/organisms/StuList'
import { HomeTemplate } from '@/components/Home/templates/style'
import Header from '@/components/common/Header'

const HomePage = () => {
  return (
    <HomeTemplate>
      <Header />
      <StuList />
    </HomeTemplate>
  )
}

export default HomePage
