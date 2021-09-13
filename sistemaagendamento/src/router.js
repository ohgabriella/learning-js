import { Router } from 'express';

const routers = new Router();

routers.get('/', (req, res) => {
    return res.json({message: 'Okay'});
});


export default routers;