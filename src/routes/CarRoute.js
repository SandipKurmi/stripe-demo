import Controller from '../controllers/CarController';
// import auth from '../middleware/auth.middleware'

export default (router) => {
   
    router.post(`/api/car`, Controller.insert);
    router.get(`/api/car`, Controller.getAll);
    router.put(`/api/car/:id`, Controller.update);
    router.delete(`/api/car/:id`, Controller.delete);
};
