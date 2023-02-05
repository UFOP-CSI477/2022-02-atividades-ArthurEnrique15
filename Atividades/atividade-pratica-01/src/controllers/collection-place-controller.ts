import { Request, Response } from 'express';
import { CollectionPlaceService } from '../services/collection-place-service';

export class CollectionPlaceController {
  private collectionPlaceService: CollectionPlaceService;

  constructor() {
    this.collectionPlaceService = new CollectionPlaceService();
  }

  async create(request: Request, response: Response) {
    const { name, number, complement, street } = request.body;

    const createResponse = await this.collectionPlaceService.create({
      name,
      number,
      complement,
      street,
    });

    return response.json(createResponse);
  }

  async update(request: Request, response: Response) {
    const { id } = request.headers;
    const { name, number, complement, street } = request.body;

    const updateResponse = await this.collectionPlaceService.update({
      id: Number(id),
      name,
      number,
      complement,
      street,
    });

    return response.json(updateResponse);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.headers;

    const deleteResponse = await this.collectionPlaceService.delete(Number(id));

    return response.json(deleteResponse);
  }

  async findAll(request: Request, response: Response) {
    const collectionPlaces = await this.collectionPlaceService.findAll();

    return response.json(collectionPlaces);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.headers;

    const collectionPlace = await this.collectionPlaceService.findById(Number(id));

    return response.json(collectionPlace);
  }

  async findByName(request: Request, response: Response) {
    const { name } = request.headers;

    const collectionPlace = await this.collectionPlaceService.findByName(name as string);

    return response.json(collectionPlace);
  }
}
