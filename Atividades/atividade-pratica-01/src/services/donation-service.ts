import { Repository } from 'typeorm';
import { dataSource } from '../../db-config';
import { CollectionPlace } from '../database/entities/collection-place';
import { Donation } from '../database/entities/donation';
import { Person } from '../database/entities/person';
import { AppError } from '../errors/app-error';
import { CreateDonationDTO, UpdateDonationDTO } from './dtos/donation-dto';

export class DonationService {
  private donationRepository: Repository<Donation>;

  private personRepository: Repository<Person>;

  private collectionPlaceRepository: Repository<CollectionPlace>;

  constructor() {
    this.donationRepository = dataSource.getRepository(Donation);
    this.personRepository = dataSource.getRepository(Person);
    this.collectionPlaceRepository = dataSource.getRepository(CollectionPlace);
  }

  async create({ date, personId, collectionPlaceId }: CreateDonationDTO) {
    const person = await this.personRepository.findOne({ where: { id: personId } });

    if (!person) {
      throw new AppError('Person not found!');
    }

    const collectionPlace = await this.collectionPlaceRepository.findOne({ where: { id: collectionPlaceId } });

    if (!collectionPlace) {
      throw new AppError('Collection place not found!');
    }

    const donation = this.donationRepository.create({ date, person, collectionPlace });

    const createdDonation = this.donationRepository.save(donation);

    return createdDonation;
  }

  async update({
    id,
    date,
    personId,
    collectionPlaceId,
  }: UpdateDonationDTO) {
    const donation = await this.donationRepository.findOne({ where: { id } });

    if (!donation) {
      throw new AppError('Donation not found!');
    }

    let person: Person | null = null;
    if (personId) {
      person = await this.personRepository.findOne({ where: { id: personId } });

      if (!person) {
        throw new AppError('Person not found!');
      }
    }

    let collectionPlace: CollectionPlace | null = null;
    if (collectionPlaceId) {
      collectionPlace = await this.collectionPlaceRepository.findOne({ where: { id: collectionPlaceId } });

      if (!collectionPlace) {
        throw new AppError('Collection place not found!');
      }
    }

    const updateResponse = await this.donationRepository.save({
      id,
      date,
      person: person || undefined,
      collectionPlace: collectionPlace || undefined,
    });

    return updateResponse;
  }

  async delete(id: number) {
    const donation = await this.donationRepository.findOne({ where: { id } });

    if (!donation) {
      throw new AppError('Donation not found!');
    }

    const deleteResponse = await this.donationRepository.delete({ id });

    if (!deleteResponse.affected) {
      throw new AppError('Failed to delete donation!');
    }

    return { message: 'Donation deleted successfully!' };
  }

  async findAll() {
    const donations = await this.donationRepository.createQueryBuilder('donation')
      .leftJoinAndSelect('donation.person', 'person')
      .leftJoinAndSelect('donation.collectionPlace', 'collectionPlace')
      .getMany();

    return donations;
  }

  async findById(id: number) {
    const donation = await this.donationRepository.createQueryBuilder('person')
      .leftJoinAndSelect('donation.person', 'person')
      .leftJoinAndSelect('donation.collectionPlace', 'collectionPlace')
      .where({ id })
      .getOne();

    if (!donation) {
      throw new AppError('Donation not found!');
    }

    return donation;
  }
}
