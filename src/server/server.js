import express from 'express';
import Middleware  from './middleware';
// import { Handlers } from './handlers';

(() => {
    const PORT = 3000;
    const app = express();

    // attach middleware
   Middleware.attach(app);
   //attach routes
//    Handlers.attach(app)
   // verify server health
   app.get('/health', (req,res) => {
       res.sendStatus(200)
   })

    app.listen(PORT, () => {
        console.log(`listening on port: ${PORT}`);
    })
})();

