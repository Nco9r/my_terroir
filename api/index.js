import express from 'express'
import Mailchimp from 'mailchimp-api-v3'

const API_KEY = process.env.MAILCHIMP_API_KEY || '72fc0e38a105fa8d3752991afdc5b261-us1'
const AUDIENCE_ID = '1d67a47d1f'
const mailchimp = new Mailchimp(API_KEY)

const app = express()
app.use(express.json())

app.post('/subscribe', async(req, res) => {
  const {email: email_address} = req.body
    try{
      const response = await mailchimp.request({
        method: 'post',
        path: `/lists/${AUDIENCE_ID}/members`,
        body: {
          email_address,
          status: "subscribed"
        }
      })
      const { _links, ...result } = response
      res.status(result.statusCode).json(result)
    }catch(err){
      res.status(err.status).send(err.detail)
    }
})

export default {
  path: '/api',
  handler: app
}