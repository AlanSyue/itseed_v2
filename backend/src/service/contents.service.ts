import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Members } from '../entity/members.entity';
import { MembersDTO } from '../DTO/contents/members.dto';

@Injectable()
export class ContentsService {
    constructor(
        @InjectRepository(Members)
        private readonly MembersRepository: Repository<Members>,
    ) { }

    async getMembersByGrade(grade:number): Promise<Object> {
        return await this.MembersRepository.find({
            where: {
                grade: grade
            }
        })
    }

    async addMembers(memberData: MembersDTO): Promise<Object> {
        const member = new Members();
        member.name = memberData.name;
        member.school = memberData.school;
        member.department = memberData.department;
        member.grade = memberData.grade;
        return this.MembersRepository.save(member);
    }
}
