import Controller from './Controller';
import Category from '../models/CategoryModel';
import CategoryService from '../services/CategoryService';

const categoryService = new CategoryService(new Category().getInstance());

class CategoryController extends Controller {
    constructor(service) {
        super(service);
        this.insertcategory = this.insertcategory.bind(this);
        this.searchcategoryname = this.searchcategoryname.bind(this);

        this.get1 = this.get1.bind(this);
        this.update1 = this.update1.bind(this);
        this.delete = this.delete.bind(this);
    }
    async searchcategoryname(req, res) {
        const data = {
            Auth: req.headers.authorization
        }
        const response = await this.service.insertcategory(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }

    async insertcategory(req, res) {
        const data = {
            body: req.body,
            Auth: req.headers.authorization
        }
        const response = await this.service.insertcategory(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }

    //curd
    async get1(req, res) {
        const data = {
            Auth: req.headers.authorization
        }
        console.log('data')
        const response = await this.service.get1(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }

    async update1(req, res) {
        const data = {
            body: req.body.Categoryname,
            id: req.params.id,
            Auth: req.headers.authorization
        }
        
        const response = await this.service.update1(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }
    async delete(req, res) {
        const data = {
            body: req.body,
            id: req.params.id,
            Auth: req.headers.authorization
        }
        const response = await this.service.delete(data);
        if (response.error) return res.status(response.statusCode).send(response);
        return res.status(response.statusCode).send(response);
    }
}



export default new CategoryController(categoryService);
