
import express, {Application} from 'express';
import routesProduct from '../routes/product';
import routesUser from '../routes/user';
import { Product } from './product.model';
import sequelize from '../db/connection';

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
        this.app.use('/api/products',routesProduct);
        this.app.use('/api/users', routesUser);
    }

    middlewares(){
        this.app.use(express.json())
    }
    async dbConnect() {
        try {
            await Product.sync();
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
} 


export default Server
