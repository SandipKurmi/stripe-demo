
import express from 'express';
import userRoute from './UserRoute';
import categoryRoute from './CategoryRoute';
import blogRoute from './BlogRoute';
import customerRoute from './CustomerRoute'
import healthRoute from './HealthRoute'
import carRoute from './CarRoute'






const router = express.Router();


userRoute(router);
categoryRoute(router)
blogRoute(router)
customerRoute(router)
healthRoute(router)
carRoute(router)


export default router;
