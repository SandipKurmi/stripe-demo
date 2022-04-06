import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class HealthModel {
    // eslint-disable-next-line class-methods-use-this
    initSchema() {
        const schema = new Schema(
            {
                PatientName: {
                    type: String,
                    default: null,
                },
                IdNo: {
                    type: Number,
                    default: null,
                },
                Height : {
                    type: Number,
                    default: null,
                },
                Weight : {
                    type: Number,
                    default: null,

                },
                Cause: {
                    type: String,
                    default: null,
                },

            },
            {
                timestamps: true,
            },
        );
        schema.plugin(uniqueValidator);
        mongoose.model('Health', schema);
    }

    getInstance() {
        this.initSchema();
        return mongoose.model('Health');
    }

    // eslint-disable-next-line class-methods-use-this
    getModel() {
        return mongoose.model('Health');
    }
}

export default HealthModel;
