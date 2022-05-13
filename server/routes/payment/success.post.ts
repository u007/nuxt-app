// https://v3.nuxtjs.org/guide/features/server-routes/#server-middleware

// import fs from 'node:fs'
// import { sendStream } from 'h3'
import { ServerResponse } from 'h3'

const paymentSuccess = defineEventHandler(async (event) => {
  const { req, context } = event
  const res = event.res as ServerResponse
  console.log('paymentSuccess', req.url, context)
  const body = await useBody(event)
  const config = useRuntimeConfig()

  console.log('paymentSuccess: ' + req.url, body, config)

  res.writeHead(302, {
    Location: '/about?orderNo=123',
    //add other headers here...
  })
  res.end() // need this to send the response
  // return { status: 200, body: { success: 1 } }
  //send html or csv file
  //return sendStream(event, fs.createReadStream('/path/to/file'))
})
// rawangshops.com
export default paymentSuccess
