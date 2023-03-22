import { Request, Response } from 'express';
import { UserService } from '../services/user-service';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async create(request: Request, response: Response) {
    const { username, password } = request.body;

    const createResponse = await this.userService.create({ username, password });

    return response.json(createResponse);
  }

  async login(request: Request, response: Response) {
    const { username, password } = request.body;

    const loginResponse = await this.userService.login({ username, password });

    return response.json(loginResponse);
  }
}
