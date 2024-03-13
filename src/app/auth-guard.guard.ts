import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log(route.url.map(u => u.path))
  let loggedInFlag = localStorage.getItem('loggedIn') as string
  if (loggedInFlag && loggedInFlag === 'ashish') {
    return true
  }
  return false
};
