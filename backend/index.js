import express from 'express'
import mongoose from 'mongoose'
import Cors from 'cors'
import Messages from './Db.js'
import Pusher from 'pusher'


//
const app = express()
const port = process.env.PORT || 5001

var pusher = new Pusher({
    appId: "1132000",
    key: "190f20a721811a50f179",
    secret: "291863331ea99858a099",
    cluster: "ap1",
    useTLS: true
})

//
app.use(express.json())
app.use(Cors())

//
const connection_url = 'mongodb+srv://whatsapp:whatsapp123@whatsappmern.4de8r.mongodb.net/dbWhatsapp?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
})


const db = mongoose.connection
db.once('open', () => {
    console.log('db is connected')
    const msgCollection = db.collection('messages')
    const changeSteam = msgCollection.watch()

    changeSteam.on('change', (change) => {
        console.log(change)
        if (change.operationType === 'insert') {
            const messageDetails = change.fullDocument;
            pusher.trigger('message1', 'inserted', {
                name: messageDetails.name,
                message: messageDetails.message,
                timetamp: messageDetails.timetamp,
                received: messageDetails.received


            })
        }
        else{
            console.log('error in pusher')
        }
    })
})

//
app.get('/', (req, res) => {
    res.status(200).send('hello from backend faizan sir')
})
app.get('/messages/sync', (req, res) => {
    Messages.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

app.post('/messages/new', (req, res) => {
    const dbMessage = req.body
    Messages.create(dbMessage, (err, data) => {
        if (err) {
            res.status(500).send(err)
        }
        else {
            res.status(201).send(data)
        }
    })
})

//
app.listen(port, () => console.log('the port is running at', port))