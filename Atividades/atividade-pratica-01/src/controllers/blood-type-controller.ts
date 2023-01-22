import { Request, Response } from 'express';
import { BloodTypeService } from '../services/blood-type-service';

export class BloodTypeController {
  private bloodTypeService: BloodTypeService;

  constructor() {
    this.bloodTypeService = new BloodTypeService();
  }

  async create(request: Request, response: Response) {
    const { type, factor } = request.body;

    const createResponse = await this.bloodTypeService.create({ type, factor });

    console.log(createResponse);

    return response.json(createResponse);
  }
}
