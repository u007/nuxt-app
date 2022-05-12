export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'global-test',
    () => {
      console.log(
        'this global middleware was added in a plugin and will be run on every route change'
      )
    },
    { global: true }
  )

  // addRouteMiddleware('named-test', () => {
  //   console.log('this named middleware was added in a plugin and would override any existing middleware of the same name')
  // })
})
