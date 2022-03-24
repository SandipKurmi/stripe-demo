import Controller from './Controller';
import Blog from '../models/BlogModel';
import BlogService from '../services/BlogService';

const blogService = new BlogService(new Blog().getInstance());

class BlogController extends Controller {
    constructor(service) {
        super(service);
       
    }



}



export default new BlogController(blogService);
