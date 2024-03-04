import { Router, Request, Response } from 'express';

const routeHome = function (router: Router) {
    router.get('/', (req: Request, res: Response) => {
        res.send('Hello from the router!');
    });

    return router;
}

export default routeHome;