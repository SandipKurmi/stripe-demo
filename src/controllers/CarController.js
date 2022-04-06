import Controller from './Controller';
import cars from '../models/CarModel';
import CarService from '../services/CarService';

const carService = new CarService(new cars().getInstance());

class CarController extends Controller {
  constructor(service) {
    super(service)
  }
}

export default new CarController(carService);
