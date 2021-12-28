import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './backend/router/index.js'
import './backend/schedule/index.js'

const app = express()
const port = 3001
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./backend/resource'));
app.use(express.static('./backend/var'));

router(app)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, function (err) {
    if (err) return console.info(err)
    console.info('server is running at localhost' + port )
})