import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/User.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>
  ) { }

  addUser(data: {email: string, password: string}) {
    const user = new User();
    user.email = data.email;
    user.password = data.password;
    return this.usersRepository.save(user);
  }
}
