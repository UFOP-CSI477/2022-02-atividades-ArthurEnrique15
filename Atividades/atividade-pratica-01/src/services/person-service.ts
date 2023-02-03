import { Repository } from 'typeorm';
import { dataSource } from '../../db-config';
import { BloodType } from '../database/entities/blood-type';
import { Person } from '../database/entities/person';
import { AppError } from '../errors/app-error';
import { CreatePersonDTO, UpdatePersonDTO } from './dtos/person-dto';

export class PersonService {
  private personRepository: Repository<Person>;

  private bloodTypeRepository: Repository<BloodType>;

  constructor() {
    this.personRepository = dataSource.getRepository(Person);
    this.bloodTypeRepository = dataSource.getRepository(BloodType);
  }

  async create({ document, name, number, complement, street, bloodTypeId }: CreatePersonDTO) {
    const personAlreadyExists = await this.personRepository.findOne({ where: { document } });

    if (personAlreadyExists) {
      throw new AppError('Person already exists!');
    }

    let bloodType: BloodType | null = null;
    if (bloodTypeId) {
      bloodType = await this.bloodTypeRepository.findOne({ where: { id: bloodTypeId } });

      if (!bloodType) {
        throw new AppError('Blood Type not found!');
      }
    }

    const person = this.personRepository.create({
      document,
      name,
      number,
      complement,
      street,
      bloodType: bloodType || undefined,
    });

    const createdPerson = this.personRepository.save(person);

    return createdPerson;
  }

  async update({
    id,
    document,
    name,
    number,
    complement,
    street,
    bloodTypeId,
  }: UpdatePersonDTO) {
    const person = await this.personRepository.findOne({ where: { id } });

    if (!person) {
      throw new AppError('Person not found!');
    }

    const updateResponse = await this.personRepository.save({
      id,
      document,
      name,
      number,
      complement,
      street,
      bloodTypeId,
    });

    return updateResponse;
  }

  async delete(id: number) {
    const person = await this.personRepository.findOne({ where: { id } });

    if (!person) {
      throw new AppError('Person not found!');
    }

    const deleteResponse = await this.personRepository.delete({ id });

    if (!deleteResponse.affected) {
      throw new AppError('Failed to delete person!');
    }

    return { message: 'Person deleted successfully!' };
  }

  async findAll() {
    const persons = await this.personRepository.find();
    return persons;
  }

  async findById(id: number) {
    const person = await this.personRepository.findOne({ where: { id } });

    if (!person) {
      throw new AppError('Person not found!');
    }

    return person;
  }

  async findByName(name: string) {
    const persons = await this.personRepository.find({ where: { name } });
    return persons;
  }
}
