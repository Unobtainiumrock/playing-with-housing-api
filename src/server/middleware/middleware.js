import parser from 'body-parser';
import compression from 'compression';
import morgan from 'morgan';

class Middleware {
    constructor() {
        this.attach = (app) => {
            app.use(parser);
            app.use(morgan);
            app.use(compression);   
        }
    }
}

export default new Middleware();
