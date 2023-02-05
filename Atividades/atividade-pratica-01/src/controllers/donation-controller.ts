import { Request, Response } from 'express';
import { DonationService } from '../services/donation-service';

export class DonationController {
  private donationService: DonationService;

  constructor() {
    this.donationService = new DonationService();
  }

  async create(request: Request, response: Response) {
    const { date, personId, collectionPlaceId } = request.body;

    const createResponse = await this.donationService.create({ date: new Date(date), personId, collectionPlaceId });

    return response.json(createResponse);
  }

  async update(request: Request, response: Response) {
    const { id } = request.headers;
    const { date, personId, collectionPlaceId } = request.body;

    const updateResponse = await this.donationService.update({
      id: Number(id),
      date: date ? new Date(date) : undefined,
      personId,
      collectionPlaceId,
    });

    return response.json(updateResponse);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.headers;

    const deleteResponse = await this.donationService.delete(Number(id));

    return response.json(deleteResponse);
  }

  async findAll(request: Request, response: Response) {
    const donations = await this.donationService.findAll();

    return response.json(donations);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.headers;

    const donation = await this.donationService.findById(Number(id));

    return response.json(donation);
  }
}
