export const UserController = {
  signup: '/user/registration/',
  login: '/user/login/',
  refresh: '/user/token/refresh/',
  location(stuNum: number) {
    return `/state/${stuNum}`
  },
}
