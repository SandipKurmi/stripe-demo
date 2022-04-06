import Service from './Service';
import dotenv from "dotenv";
dotenv.config();

class CarService extends Service {
    constructor(model) {
        super(model);
   
    }
    
}

export default CarService;
