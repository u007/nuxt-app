// https://v3.nuxtjs.org/guide/features/server-routes/#server-middleware
export default defineEventHandler(async (event) => {
  const { req } = event
  const body = await useBody(event)

  console.log('server payment success: ' + req.url, body)
  return {
    ok: 1
  }
})
