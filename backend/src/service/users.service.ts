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

  addUser(data: {email: string, password: string}) {
    const user = new Users();
    user.email = data.email;
    user.password = data.password;
    return this.usersRepository.save(user);
  }
}
