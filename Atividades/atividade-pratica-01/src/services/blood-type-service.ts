import { Repository } from 'typeorm';
import { dataSource } from '../../db-config';
import { BloodType } from '../database/entities/blood-type';
import { AppError } from '../errors/app-error';
import { CreateBloodTypeDTO } from './dtos/blood-type-dto';

export class BloodTypeService {
  private repository: Repository<BloodType>;

  constructor() {
    this.repository = dataSource.getRepository(BloodType);
  }

  async create({ type, factor }: CreateBloodTypeDTO) {
    const bloodTypeAlreadyExists = await this.repository.findOne({
      where: { type, factor },
    });

    if (bloodTypeAlreadyExists) {
      throw new AppError('Blood Type already exists!');
    }

    const bloodType = this.repository.create({ type, factor });

    const createdBloodType = this.repository.save(bloodType);

    return createdBloodType;
  }
}
