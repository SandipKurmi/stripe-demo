import Controller from './Controller';
// import Blog from '../models/BlogModel';
// import BlogService from '../services/BlogService';
import Healths from '../models/HealthModel';
import HealthService from '../services/HealthService';

const healthService = new HealthService(new Healths().getInstance());

class HealthController extends Controller {
  constructor(service) {
    super(service)

  }

}


export default new HealthController(healthService);
