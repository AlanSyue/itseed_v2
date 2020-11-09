import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entity/users.entity';
import { hashSync } from 'bcrypt'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ) { }

  addUser(userData) {
    const user = new Users();
    user.email = userData.email;
    
    user.password = hashSync(userData.password, 10);
    return this.usersRepository.save(user);
  }

  getAllUser() {
    return this.usersRepository.find();
  }

  getUserById(userId: number) {
    return this.usersRepository.findOne(userId);
  }

  updateUserById(userId: number, userData) {
    return this.usersRepository.update(userId, userData);
  }

  deleteUserById(userId: number) {
    return this.usersRepository.delete(userId);
  }
}
