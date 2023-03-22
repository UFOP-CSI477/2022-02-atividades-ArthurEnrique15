import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { dataSource } from '../../db-config';
import { User } from '../database/entities/user';
import { AppError } from '../errors/app-error';

interface UserDTO {
  username: string
  password: string
}

export class UserService {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create({ username, password }: UserDTO) {
    const userAlreadyExists = await this.repository.findOne({ where: { username } });

    if (userAlreadyExists) {
      throw new AppError('Username already exists!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = this.repository.create({ username, password: hashedPassword });

    const createdUser = await this.repository.save(user);

    return createdUser;
  }

  async login({ username, password }: UserDTO) {
    const user = await this.repository.findOne({ where: { username } });

    if (!user) {
      throw new AppError('Invalid information!');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Invalid information!');
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET ?? '', { expiresIn: '1d' });

    return { token };
  }
}
