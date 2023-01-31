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

    return response.json(updateResponse);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.headers;

    const deleteResponse = await this.bloodTypeService.delete(Number(id));

    return response.json(deleteResponse);
  }

  async findAll(request: Request, response: Response) {
    const bloodTypes = await this.bloodTypeService.findAll();

    return response.json(bloodTypes);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.headers;

    const bloodType = await this.bloodTypeService.findById(Number(id));

    return response.json(bloodType);
  }
}
