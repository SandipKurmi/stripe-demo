import { ExportCustomJobPage } from 'twilio/lib/rest/bulkexports/v1/export/exportCustomJob';
import Service from './Service';
import bcrypt from 'bcrypt';
import { verify } from 'jsonwebtoken';



class CategoryService extends Service {
    constructor(model) {
        super(model);
        this.insertcategory = this.insertcategory.bind(this);

        this.searchcategoryname = this.searchcategoryname.bind(this);


        this.get1 = this.get1.bind(this);
        this.update1 = this.update1.bind(this);
        this.delete = this.delete.bind(this);
    }

    async insertcategory(a) {
        try {
            const token = a.Auth
            const decoded = verify(token, 'servskvlsnjsdhfjkhjkds');
            var data = new this.model({
                Categoryname: a.body.Categoryname,
                userid: decoded.userID
            });
            await data.save()
            // const data = await this.model.create(a.body);;
            return {
                error: false,
                statusCode: 202,
                data: data,
            };
        } catch (err) {
            // console.log('errors ssdsds',err);
            return {
                error: true,
                statusCode: 500,
                message: 'Not able to create item',
                errors: err,
            };
        }
    }
    //curd
    async get1(a) {
        try {
            const token = a.Auth
            const decoded = verify(token, 'servskvlsnjsdhfjkhjkds');
            let userdata = await this.model.find({ "userid": decoded.userID })
            return {
                error: false,
                statusCode: 202,
                data: userdata,
            };
        } catch (err) {
            // console.log('errors ssdsds',err);
            return {
                error: true,
                statusCode: 500,
                message: 'cant find a catogory',
                errors: err,
            };
        }
    }

    async update1(a) {
        try {
            console.log(a.body)
            const token = a.Auth
            const decoded = verify(token, 'servskvlsnjsdhfjkhjkds');       
          let tempuser = await this.model.findOne({ "userid": decoded.userID })
          if (tempuser) {
                data = "test"
                if (data) {
                    return {
                        error: false,
                        deleted: true,
                        statusCode: 200,
                        message: 'record update successfullly!',
                        data
                    };
                } else {
                    return {
                        error: true,
                        statusCode: 404,
                        message: 'item not found',
                    };
                }
            } else {
                return {
                    error: true,
                    statusCode: 404,
                    message: 'item not found',
                };
            }

        } catch (err) {
            // console.log('errors ssdsds',err);
            return {
                error: true,
                statusCode: 500,
                message: 'cant find a catogory',
                errors: err,
            };
        }
    }


    async delete(a) {
        try {
            const token = a.Auth
            const categortyid = a.id
            const decoded = verify(token, 'servskvlsnjsdhfjkhjkds');
            // decoded.userID
            let tempuser = await this.model.findOne({ "userid": decoded.userID })
            if (tempuser) {
                let catid = await this.model.findByIdAndDelete(categortyid)
                if (catid) {
                    return {
                        error: false,
                        deleted: true,
                        statusCode: 200,
                        message: 'record delete successfullly!',
                        tempuser,
                    };
                } else {
                    return {
                        error: true,
                        statusCode: 404,
                        message: 'item not found',
                    };
                }
            } else {
                return {
                    error: true,
                    statusCode: 404,
                    message: 'item not found',
                };
            }
        } catch (err) {
            return {
                error: true,
                statusCode: 500,
                message: 'cant find a catogory',
                errors: err,
            };
        }
    }

    async searchcategoryname(a) {
        try {
            const token = a.Auth
            const decoded = verify(token, 'servskvlsnjsdhfjkhjkds');
            // decoded.userID
            // const data = await this.model.create(a.body);;
            return {
                error: false,
                statusCode: 202,
                data: data,
            };
        } catch (err) {
            // console.log('errors ssdsds',err);
            return {
                error: true,
                statusCode: 500,
                message: 'cant find a catogory',
                errors: err,
            };
        }
    }
    
}

export default CategoryService;
