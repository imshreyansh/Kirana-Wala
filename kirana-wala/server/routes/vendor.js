const { addVendor } = require('../controller/vendor/vendor')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addVendor',addVendor)


    app.use('/api/vendor/', router);

}