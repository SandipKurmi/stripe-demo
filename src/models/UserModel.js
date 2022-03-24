import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

class UserModel {
  // eslint-disable-next-line class-methods-use-this
  initSchema() {
    const schema = new Schema(
      {
        name: {
          type: String,
          default: null,
        },
        email: {
          type: String,
          default: null,
        },
        password: {
          type: String,
          required: true
        } 
      },
      {
        timestamps: true,
      },
    );
    schema.plugin(uniqueValidator);
    mongoose.model('User', schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model('User');
  }

  // eslint-disable-next-line class-methods-use-this
  getModel() {
    return mongoose.model('User');
  }
}

export default UserModel;
