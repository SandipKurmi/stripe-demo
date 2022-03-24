import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class BlogModel {
    // eslint-disable-next-line class-methods-use-this
    initSchema() {
        const schema = new Schema(
            {
                title: {
                    type: String,
                    default: null,
                },
                Description: {
                    type: String,
                    default: null,
                },
                category: {
                    type: String,
                    required: true
                },
                userid: {
                  type: String,
                  required : true
                }
            },
            {
                timestamps: true,
            },
        );
        schema.plugin(uniqueValidator);
        mongoose.model('Blog', schema);
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('Blog');
    }

    // eslint-disable-next-line class-methods-use-this
    getModel() {
        return mongoose.model('Blog');
    }
}

export default BlogModel;
