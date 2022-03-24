import Controller from '../controllers/BlogController';

export default (router) => {
   
    router.post(`/api/blog`, Controller.insertblog);

    router.get(`/api/blog`, Controller.getAll);
    router.get(`/api/blog/:id`, Controller.get);
    router.put(`/api/blog/:id`, Controller.update);
    router.delete(`/api/blog/:id`, Controller.delete);
};
