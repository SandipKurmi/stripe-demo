import { ExportCustomJobPage } from 'twilio/lib/rest/bulkexports/v1/export/exportCustomJob';
import Service from './Service';
import bcrypt from 'bcrypt';
import { verify } from 'jsonwebtoken';
import Category from '../models/CategoryModel';



    
class BlogService extends Service {
    constructor(model) {
        super(model);
        this.insertblog = this.insertblog.bind(this);
        this.updateblog = this.updateblog.bind(this);
        this.deleteblog = this.deleteblog.bind(this);
        this.getblog = this.getblog.bind(this);

    }

    async insertblog(a) {
        try {
            const token = a.Auth
            const decoded = verify(token, 'servskvlsnjsdhfjkhjkds');
            if (true) {
                var data = new this.model({
                    title: a.body.title,
                    Description: a.body.Description,
                    category: a.body.category,
                    userid: decoded.userID
                });
                await data.save()
                return {
                    error: false,
                    statusCode: 202,
                    data: data,
                };
            } else {
                return {
                    error: true,
                    statusCode: 404,
                    message: 'categorty not found',
                    errors: err,
                };
            }
        } catch (err) {
            console.log(err)
            return {
                error: true,
                statusCode: 500,
                message: 'Not able to create item',
                errors: err,
            };
        }
    }
    async updateblog(a) {
        try {
            const token = a.Auth
            const decoded = verify(token, 'servskvlsnjsdhfjkhjkds');
            if (true) {
                var data = new this.model({
                    title: a.body.title,
                    Description: a.body.Description,
                    category: a.body.category,
                    userid: decoded.userID
                });
                await data.save()
                return {
                    error: false,
                    statusCode: 202,
                    data: data,
                };
            } else {
                return {
                    error: true,
                    statusCode: 404,
                    message: 'categorty not found',
                    errors: err,
                };
            }
        } catch (err) {
            console.log(err)
            return {
                error: true,
                statusCode: 500,
                message: 'Not able to create item',
                errors: err,
            };
        }
    }
    async deleteblog(a) {
        try {
            const token = a.Auth
            const decoded = verify(token, 'servskvlsnjsdhfjkhjkds');
            if (true) {
                var data = new this.model({
                    title: a.body.title,
                    Description: a.body.Description,
                    category: a.body.category,
                    userid: decoded.userID
                });
                await data.save()
                return {
                    error: false,
                    statusCode: 202,
                    data: data,
                };
            } else {
                return {
                    error: true,
                    statusCode: 404,
                    message: 'categorty not found',
                    errors: err,
                };
            }
        } catch (err) {
            console.log(err)
            return {
                error: true,
                statusCode: 500,
                message: 'Not able to create item',
                errors: err,
            };
        }
    }
    async getblog(a) {
        try {
            const token = a.Auth
            const decoded = verify(token, 'servskvlsnjsdhfjkhjkds');
            if (true) {
                var data = new this.model({
                    title: a.body.title,
                    Description: a.body.Description,
                    category: a.body.category,
                    userid: decoded.userID
                });
                await data.save()
                return {
                    error: false,
                    statusCode: 202,
                    data: data,
                };
            } else {
                return {
                    error: true,
                    statusCode: 404,
                    message: 'categorty not found',
                    errors: err,
                };
            }
        } catch (err) {
            console.log(err)
            return {
                error: true,
                statusCode: 500,
                message: 'Not able to create item',
                errors: err,
            };
        }
    }













}

export default BlogService;
