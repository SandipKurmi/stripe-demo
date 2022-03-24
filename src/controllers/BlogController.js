import Controller from './Controller';
import Blog from '../models/BlogModel';
import BlogService from '../services/BlogService';

const blogService = new BlogService(new Blog().getInstance());

class BlogController extends Controller {
    constructor(service) {
        super(service);
        this.insertblog = this.insertblog.bind(this);
    }

    async insertblog(req, res) {
        const data={
            body : req.body,
            Auth : req.headers.authorization
        }
        const response = await this.service.insertblog(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
      }

      async updateblog(req, res) {
        const data={
            body : req.body,
            Auth : req.headers.authorization
        }
        const response = await this.service.insertblog(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
      }

      async deleteblog(req, res) {
        const data={
            body : req.body,
            Auth : req.headers.authorization
        }
        const response = await this.service.insertblog(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
      }

      async getblog(req, res) {
        const data={
            body : req.body,
            Auth : req.headers.authorization
        }
        const response = await this.service.insertblog(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
      }
}



export default new BlogController(blogService);
