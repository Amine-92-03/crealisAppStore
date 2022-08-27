import express  from 'express'
import bodyParser from 'body-parser'
import dotEnv from 'dotenv'
import SaveContact from './zohoApi.js'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
dotEnv.config()

app.post('/api', async (req, res) =>{
    let response = await SaveContact(req.body)
    return res.status(200).json({response : response })
})
app.use(express.static('./frontend'));

export default app 



