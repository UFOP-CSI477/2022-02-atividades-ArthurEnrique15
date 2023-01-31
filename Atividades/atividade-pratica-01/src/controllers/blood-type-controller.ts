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

  async update(request: Request, response: Response) {
    const { id } = request.headers;
    const { type, factor } = request.body;

    const updateResponse = await this.bloodTypeService.update({
      id: Number(id),
      type,
      factor,
    });

    console.log(updateResponse);

    return response.json(updateResponse);
  }
}
