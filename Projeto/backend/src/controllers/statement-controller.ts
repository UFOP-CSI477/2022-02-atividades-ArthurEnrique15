import { Request, Response } from 'express';
import { StatementService } from '../services/statement-service';

export class StatementController {
  private statementService: StatementService;

  constructor() {
    this.statementService = new StatementService();
  }

  async create(request: Request, response: Response) {
    const { value, type } = request.body;
    const { token } = request.headers;

    const createResponse = await this.statementService.create({ value, type, token: token as string });

    return response.json(createResponse);
  }

  async list(request: Request, response: Response) {
    const { token } = request.headers;

    const listResponse = await this.statementService.list(token as string);

    return response.json(listResponse);
  }
}
