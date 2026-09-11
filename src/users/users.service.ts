import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository.js';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private users: User[] = []; // exemplo em memória

  async findById(id: number): Promise<User | null> {
    return await this.usersRepo.findOne({ where: { id } });
  }

  constructor(
    @InjectRepository(User)
    private usersRepo: Repository<User>,
  ) {}

  async create(name: string, email: string, password: string) {
    const hashedPassword: string = await bcrypt.hash(password, 10);
    const user = this.usersRepo.create({
      name,
      email,
      password: hashedPassword,
    });
    return this.usersRepo.save(user);
  }

  async findByEmail(email: string) {
    return this.usersRepo.findOne({ where: { email } });
  }
}
