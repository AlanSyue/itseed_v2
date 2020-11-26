import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profiles } from '../entity/profiles.entity';
import { ProfileDTO } from '../DTO/profiles/profile.dto';
@Injectable()
export class ProfilesService {
    constructor(
        @InjectRepository(Profiles)
        private readonly profilesRepository: Repository<Profiles>,
    ) {}

    async getProfiles(): Promise<Object> {
        return this.profilesRepository.find();
    }

    async getProfileByUserId(userId: number): Promise<ProfileDTO> {
        return await this.profilesRepository.findOne({
            where: {
                user_id: userId
            }
        })
    }
    
    async addProfile(profileData: ProfileDTO): Promise<ProfileDTO> {
        const profile = new Profiles();
        profile.user_id = profileData.user_id;
        profile.name = profileData.name;
        profile.gender = profileData.gender;
        profile.school = profileData.school;
        profile.department = profileData.department;
        profile.education = profileData.education;
        profile.grade = profileData.grade;
        profile.reference = profileData.reference;
        return this.profilesRepository.save(profile);
    }

    async updateProfile(id: number, profileData: ProfileDTO): Promise<Object> {
        return this.profilesRepository.update(id, profileData);
    }
}
