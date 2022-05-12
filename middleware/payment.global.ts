// export default defineEventHandler((event) => {
//   console.log('New request: ' + event.req.url)
// })

export default defineNuxtRouteMiddleware((to, from) => {
  // if (to.params.id === '1') {
  //   console.log('....nooo')
  //   return abortNavigation()
  // }

  if (to.path === '/payment/success') {
    console.log('direct middleware', to)
    return navigateTo('/about?orderNo=123')
  }

  console.log('payment middleware', to)
  // return navigateTo('/about')
  // return abortNavigation()
  return
})
