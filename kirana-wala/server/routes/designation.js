const { createDesigntion,getAllDesignations,getDesignationById,updateDesignation } = require('../controller/master/designation')

exports.routes = (express, app) => {

    const router = express.Router();

    router.post('/addDesignation',createDesigntion)

    router.get('/getAllDesignations',getAllDesignations)

    router.get('/getDesignationById/:id',getDesignationById)

    router.post('/updateDesignation',updateDesignation)




    app.use('/api/designation/', router);

}