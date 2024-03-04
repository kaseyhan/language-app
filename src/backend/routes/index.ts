import { Router, Express} from 'express';
import routeHome from './home';
import routeUsers from './users';

const connectApi = function (app: Express, router: Router) {
    app.use('/api', routeHome(router));
    app.use('/api/users', routeUsers(router));
}

export default connectApi;