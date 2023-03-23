import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { dataSource } from '../../db-config';
import { Statement } from '../database/entities/statement';
import { User } from '../database/entities/user';
import { AppError } from '../errors/app-error';

interface StatementDTO {
  value: number
  type: string
  description: string
  token: string
}

export class StatementService {
  private statementRepository: Repository<Statement>;

  private userRepository: Repository<User>;

  constructor() {
    this.statementRepository = dataSource.getRepository(Statement);
    this.userRepository = dataSource.getRepository(User);
  }

  async create({ value, type, description, token }: StatementDTO) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET ?? '');

    if (!decodedToken) {
      throw new AppError('Token inválido!');
    }

    const { id: userId } = decodedToken as { id: string };

    const types = ['deposit', 'withdraw'];

    if (value <= 0 || !types.includes(type)) {
      throw new AppError('valores inválidos!');
    }

    const user = await this.userRepository.findOne({ where: { id: Number(userId) } });

    if (!user) {
      throw new AppError('Usuário não encontrado!');
    }

    if (type === 'withdraw' && user.balance < value) {
      throw new AppError('Valor de retirada maior que o valor disponível!');
    }

    const statement = this.statementRepository.create({ value, type, description, user });

    const createdStatement = await this.statementRepository.save(statement);

    await this.userRepository.save({
      ...user,
      balance: type === 'deposit' ? user.balance + value : user.balance - value,
    });

    return createdStatement;
  }

  async list(token: string) {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET ?? '');

    if (!decodedToken) {
      throw new AppError('Token inválido!');
    }

    const { id: userId } = decodedToken as { id: string };

    const user = await this.userRepository.findOne({ where: { id: Number(userId) } });

    if (!user) {
      throw new AppError('Usuário não encontrado!');
    }

    const statement = await this.statementRepository.createQueryBuilder('tb_statement')
      .innerJoinAndSelect('tb_statement.user', 'user', 'user.id = :userId', { userId })
      .getMany();

    return { balance: user.balance, statement };
  }
}
