export default defineEventHandler((event) => {
  event.context.auth = { user: 123 }
})
