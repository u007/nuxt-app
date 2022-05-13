// https://v3.nuxtjs.org/guide/features/server-routes/#server-middleware
export default defineEventHandler(async (event) => {
  const { req } = event
  const body = await useBody(event)

  console.log('middleware payment: ' + req.url, body)
})
