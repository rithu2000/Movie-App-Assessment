import express from 'express'
import mongoose from 'mongoose'
import movieRouter from './routes/movieRoutes.js'
import cors from 'cors'
const app = express()

app.use(cors())
app.use('/api/', movieRouter)

mongoose.connect('mongodb://localhost:27017/MovieApp').then(() => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
})

app.listen(4500, () => {
    console.log('server started');
})