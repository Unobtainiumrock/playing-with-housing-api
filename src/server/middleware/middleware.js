import parser from 'body-parser';

class AttachMiddleware {
    constructor() {
        this.attach = (app) => {
            console.log('attaching middleware');
            app.use(parser);
        }
    }
}

export const
    AttachThese = new AttachMiddleware();