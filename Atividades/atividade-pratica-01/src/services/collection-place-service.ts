import { Repository } from 'typeorm';
import { dataSource } from '../../db-config';
import { CollectionPlace } from '../database/entities/collection-place';
import { AppError } from '../errors/app-error';
import { CreateCollectionPlaceDTO, UpdateCollectionPlaceDTO } from './dtos/collection-place-dto';

export class CollectionPlaceService {
  private repository: Repository<CollectionPlace>;

  constructor() {
    this.repository = dataSource.getRepository(CollectionPlace);
  }

  async create({ name, number, complement, street }: CreateCollectionPlaceDTO) {
    const collectionPlace = this.repository.create({
      name,
      number,
      complement,
      street,
    });

    const createdCollectionPlace = this.repository.save(collectionPlace);

    return createdCollectionPlace;
  }

  async update({
    id,
    name,
    number,
    complement,
    street,
  }: UpdateCollectionPlaceDTO) {
    const collectionPlace = await this.repository.findOne({ where: { id } });

    if (!collectionPlace) {
      throw new AppError('Collection place not found!');
    }

    const updateResponse = await this.repository.save({
      id,
      name,
      number,
      complement,
      street,
    });

    return updateResponse;
  }

  async delete(id: number) {
    const collectionPlace = await this.repository.findOne({ where: { id } });

    if (!collectionPlace) {
      throw new AppError('Collection place not found!');
    }

    const deleteResponse = await this.repository.delete({ id });

    if (!deleteResponse.affected) {
      throw new AppError('Failed to delete collectionPlace!');
    }

    return { message: 'Collection place deleted successfully!' };
  }

  async findAll() {
    const collectionPlaces = await this.repository.find();
    return collectionPlaces;
  }

  async findById(id: number) {
    const collectionPlace = await this.repository.findOne({ where: { id } });

    if (!collectionPlace) {
      throw new AppError('CollectionPlace not found!');
    }

    return collectionPlace;
  }

  async findByName(name: string) {
    const collectionPlaces = await this.repository.find({ where: { name } });
    return collectionPlaces;
  }
}
