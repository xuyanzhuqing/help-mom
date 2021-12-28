import word from './word.js'
import lesson from './lesson.js'
import grade from './grade.js'

export default (app) => {
    app.use('/word', word)
    app.use('/lesson', lesson)
    app.use('/grade', grade)
}