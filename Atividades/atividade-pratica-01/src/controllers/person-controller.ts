import { Request, Response } from 'express';
import { PersonService } from '../services/person-service';

export class PersonController {
  private personService: PersonService;

  constructor() {
    this.personService = new PersonService();
  }

  async create(request: Request, response: Response) {
    const { document, name, number, complement, street, bloodTypeId } = request.body;

    const createResponse = await this.personService.create({
      document,
      name,
      number,
      complement,
      street,
      bloodTypeId,
    });

    return response.json(createResponse);
  }

  async update(request: Request, response: Response) {
    const { id } = request.headers;
    const { document, name, number, complement, street, bloodTypeId } = request.body;

    const updateResponse = await this.personService.update({
      id: Number(id),
      document,
      name,
      number,
      complement,
      street,
      bloodTypeId,
    });

    return response.json(updateResponse);
  }

  async delete(request: Request, response: Response) {
    const { id } = request.headers;

    const deleteResponse = await this.personService.delete(Number(id));

    return response.json(deleteResponse);
  }

  async findAll(request: Request, response: Response) {
    const persons = await this.personService.findAll();

    return response.json(persons);
  }

  async findById(request: Request, response: Response) {
    const { id } = request.headers;

    const person = await this.personService.findById(Number(id));

    return response.json(person);
  }

  async findByName(request: Request, response: Response) {
    const { name } = request.headers;

    const person = await this.personService.findByName(name);

    return response.json(person);
  }
}
