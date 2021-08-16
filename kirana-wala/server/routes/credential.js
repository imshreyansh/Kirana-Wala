const { createAndLoginUser } = require('../controller/user/credential')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/createAndLoginUser',createAndLoginUser)

   



    app.use('/api/credential/', router);

}