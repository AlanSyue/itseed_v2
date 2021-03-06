import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entity/users.entity';
import { hashSync, compare } from 'bcrypt';
import { UserDTO } from '../DTO/users/user.dto';
import { createUserDTO } from 'src/DTO/users/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async register(userData) {
    const isUserExist = await this.usersRepository.count({
      where: {
        email: userData.email,
      },
    });
    if (isUserExist) {
      return {};
    }

    const user = new Users();
    user.email = userData.email;
    user.password = hashSync(userData.password, 10);
    return this.usersRepository.save(user);
  }

  async findUserData(userData: createUserDTO): Promise<UserDTO> {
    const userSaveData = await this.usersRepository.findOne({
      where: {
        email: userData.email,
      },
    });
    if (!userSaveData) {
      return null;
    }
    if (!userSaveData.is_verify) {
      return null;
    }
    const verifyResult = await compare(
      userData.password,
      userSaveData.password,
    );
    if (!verifyResult) {
      return null;
    }
    return userSaveData;
  }

  async verifyUser(hashData): Promise<Boolean> {
    const userData = await this.usersRepository.findOne({
      where: {
        email: hashData.email,
        token: hashData.hashToken
      },
    });
    let verifyResult = true;
    if (!userData) {
      verifyResult = false;
    }
    this.updateUserById(userData.id, {
      is_verify: verifyResult,
    });
    return verifyResult;
  }

  addUser(userData) {
    const user = new Users();
    user.email = userData.email;
    user.password = hashSync(userData.password, 10);
    return this.usersRepository.save(user);
  }

  getAllUser() {
    return this.usersRepository.find();
  }

  async getUserById(userId: number): Promise<Object> {
    return this.usersRepository.findOne(userId);
  }

  async getUserByEmail(email: string): Promise<UserDTO> {
    return await this.usersRepository.findOne({
      where: {
        email: email
      }
    })
  }

  updateUserById(userId: number, userData) {
    return this.usersRepository.update(userId, userData);
  }

  deleteUserById(userId: number) {
    return this.usersRepository.delete(userId);
  }
}
