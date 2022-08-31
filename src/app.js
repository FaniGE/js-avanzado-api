import express from 'express';
import morgan from 'morgan';
//para las rutas
import videoRoutes from './routes/video.routes';
import bookRoutes from './routes/book.routes';
const app=express();
const port = process.env.PORT ||4000;

//Setttings
app.set('port', port);

//middlewares
app.use(morgan('dev')); //para ver el tipo de petición que se realiza
app.use(express.json());

// Routes
app.use("/api/videos", videoRoutes);
app.use("/api/books", bookRoutes);

export default app;
