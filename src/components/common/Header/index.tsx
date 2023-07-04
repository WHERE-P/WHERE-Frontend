import * as S from './style'
import Image from 'next/image'
import Logo from '@/asset/png/WhereLogo.png'
import { LogoutIcon } from '@/asset/svg'
import Link from 'next/link'
import { logout } from '@/utils/libs/logout'

const Header = () => {
  return (
    <S.Header>
      <S.Wrapper>
        <Link href="/" passHref>
          <S.LogoWrapper>
            <S.Logo>
              <Image
                alt="WHERE LOGO"
                src={Logo}
                sizes="100%"
                layout="fill"
                width={50}
                height={55}
                priority={true}
              />
            </S.Logo>
            <p>WHERE</p>
          </S.LogoWrapper>
        </Link>
        <S.LogoutWrapper onClick={() => logout()}>
          <LogoutIcon />
          로그아웃
        </S.LogoutWrapper>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header
