import word from './word.js'
import lesson from './lesson.js'

export default (app) => {
    app.use('/word', word)
    app.use('/lesson', lesson)
}