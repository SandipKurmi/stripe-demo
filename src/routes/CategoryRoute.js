import Controller from '../controllers/CategoryController';

export default (router) => {
  
    router.get(`/api/category`, Controller.getAll);
    router.post(`/api/category`, Controller.insert);
    router.get(`/api/category/:id`, Controller.get);
    router.put(`/api/category/:id`, Controller.update);
    router.delete(`/api/category/:id`, Controller.delete);
};
