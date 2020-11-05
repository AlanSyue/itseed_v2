import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entity/users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ) { }

  addUser(userData: {email: string, password: string}) {
    const user = new Users();
    user.email = userData.email;
    user.password = userData.password;
    return this.usersRepository.save(user);
  }

  getAllUser() {
    return this.usersRepository.find();
  }

  getUserById(userId: number) {
    return this.usersRepository.findOne(userId);
  }
}
