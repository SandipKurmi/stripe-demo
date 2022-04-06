import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class CarModel {
    // eslint-disable-next-line class-methods-use-this
    initSchema() {
        const schema = new Schema(
            {
                CarName: {
                    type: String,
                    default: null,
                },
                IdNo: {
                    type: Number,
                    default: null,
                },
                price : {
                    type: Number,
                    default: null,
                },
                colour : {
                    type: String,
                    default: null,

                },

            },
            {
                timestamps: true,
            },
        );
        schema.plugin(uniqueValidator);
        mongoose.model('Cars', schema);
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('Cars');
    }

    // eslint-disable-next-line class-methods-use-this
    getModel() {
        return mongoose.model('Cars');
    }
}

export default CarModel;
