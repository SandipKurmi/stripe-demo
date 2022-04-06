import Controller from '../controllers/HealthController';
// import auth from '../middleware/auth.middleware'

export default (router) => {
   
    router.post(`/api/health`, Controller.insert);
    router.get(`/api/health`, Controller.getAll);
    router.put(`/api/health/:id`, Controller.update);
    router.delete(`/api/health/:id`, Controller.delete);
};
