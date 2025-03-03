import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';

export default defineNuxtRouteMiddleware((to, from) => {
  // 예시: 사용자 인증 상태 확인 (실제 인증 로직은 별도로 구현해야 함)
  const isAuthenticated = useCookie('token').value;

  if (!isAuthenticated && to.path !== '/login') {
    // 인증되지 않은 사용자가 '/login' 페이지 외 다른 페이지에 접근하려고 하면 '/login' 페이지로 리디렉션
    return navigateTo('/login');
  }
  else if (isAuthenticated && to.path === '/login') {
    // 인증된 상태에서 '/login' 페이지에 접근시 '/main' 페이지로 리디렉션
    return navigateTo('/main');
  }
  else if (isAuthenticated && to.path === '/') {
    // 인증된 상태에서 '/' 페이지에 접근시 '/main' 페이지로 리디렉션
    return navigateTo('/main');
  }
});
