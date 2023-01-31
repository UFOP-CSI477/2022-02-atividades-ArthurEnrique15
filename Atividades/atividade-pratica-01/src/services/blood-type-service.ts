import { Repository } from 'typeorm';
import { dataSource } from '../../db-config';
import { BloodType } from '../database/entities/blood-type';
import { AppError } from '../errors/app-error';
import { CreateBloodTypeDTO, UpdateBloodTypeDTO } from './dtos/blood-type-dto';

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

  async update({ id, type, factor }: UpdateBloodTypeDTO) {
    const bloodType = await this.repository.findOne({ where: { id } });

    if (!bloodType) {
      throw new AppError('Blood Type not found!');
    }

    const updateResponse = await this.repository.save({ id, type, factor });

    return updateResponse;
  }

  async delete(id: number) {
    const bloodType = await this.repository.findOne({ where: { id } });

    if (!bloodType) {
      throw new AppError('Blood Type not found!');
    }

    const deleteResponse = await this.repository.delete({ id });

    if (!deleteResponse.affected) {
      throw new AppError('Failed to delete blood type!');
    }

    return { message: 'Blood Type deleted successfully!' };
  }
}
