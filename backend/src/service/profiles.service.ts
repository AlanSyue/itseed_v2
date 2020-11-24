import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profiles } from '../entity/profiles.entity';

@Injectable()
export class ProfilesService {
    constructor(
        @InjectRepository(Profiles)
        private readonly profilesRepository: Repository<Profiles>,
    ) {}
    
    async addProfile(profileData) {

    }
}
