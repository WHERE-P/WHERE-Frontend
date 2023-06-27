import { Header } from '@/components/Home/molecules/Header/style'
import StuList from '@/components/Home/organisms/StuList'
import { HomeTemplate } from '@/components/Home/templates/style'

const HomePage = () => {
  return (
    <HomeTemplate>
      <Header />
      <StuList />
    </HomeTemplate>
  )
}

export default HomePage
