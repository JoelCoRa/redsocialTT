
import express, {Application} from 'express';
import routesUser from '../routes/user';
import routesDashboard from '../routes/dashboard';
import sequelize from '../db/connection';
import { User } from './user.model';
import { Post } from './post.model';
import { Foro } from './foro.model';
import { Recurso } from './recurso.model';
import { Solicitud } from './solicitud.model';
import { Reporte } from './reporte.model';
import { Organizacion } from './organizacion.model';
import cors from 'cors'

 class Server {
    private app: Application;
    private port: string ; 

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.middlewares();
        this.routes();
        this.dbConnect();

    }
    listen(){
        this.app.listen(this.port, () => {
            console.log('App running in port ' + this.port)
        })
    }

    routes(){
        this.app.use('/api/inicio', routesDashboard);
        this.app.use('/api/users', routesUser);
    }

    middlewares(){
        // Parseo body
        this.app.use(express.json());

        // Cors
        this.app.use(cors())
    }
    async dbConnect() {
        try {
            await User.sync();
            await Post.sync();
            await Foro.sync();
            await Recurso.sync(); // Cambiar usuario por organizacion en FK
            await Solicitud.sync(); 
            await Reporte.sync(); 
            await Organizacion.sync(); 
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
} 


export default Server;
