import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './backend/router/index.js'
import './backend/schedule/index.js'
import swagger from  './backend/swagger.js'

const app = express()
const port = 3001
app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static('./backend/resource'));
app.use(express.static('./backend/var'));

router(app)
swagger(app)

app.listen(port, function (err) {
    if (err) return console.error(err)
    console.info('server is running at localhost:' + port )
})