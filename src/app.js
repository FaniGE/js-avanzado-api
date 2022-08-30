import express from 'express';
import morgan from 'morgan';
//para las rutas
import videoRoutes from './routes/video.routes';
import bookRoutes from './routes/book.routes';
const app=express();

//Setttings
app.set('port', 4000);

//middlewares
app.use(morgan('dev')); //para ver el tipo de petición que se realiza
app.use(express.json());

// Routes
app.use("/api/videos", videoRoutes);
app.use("/api/books", bookRoutes);

export default app;
