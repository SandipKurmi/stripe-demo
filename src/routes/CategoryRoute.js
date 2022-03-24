import Controller from '../controllers/CategoryController';
import auth from '../middleware/auth.middleware'

export default (router) => {
  
    router.post(`/api/category`, auth,Controller.insertcategory);

    router.get(`/api/category/:name`, auth,Controller.searchcategoryname);

    router.get(`/api/category/`,auth, Controller.get1);
    router.put(`/api/category/:id`, Controller.update1);
    router.delete(`/api/category/:id`, Controller.delete);


    // router.get(`/api/category`, auth, Controller.getAll);
    // router.get(`/api/category/:id`, Controller.get);
    // router.put(`/api/category/:id`, Controller.update);
    // router.delete(`/api/category/:id`, Controller.delete);
};
