
import express, {Application} from 'express';
import routesProduct from '../routes/product';
import routesUser from '../routes/user';

 class Server {
    private app: Application;
    private port: string ; 

    constructor(){
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.middlewares();
        this.routes();

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
} 


export default Server
