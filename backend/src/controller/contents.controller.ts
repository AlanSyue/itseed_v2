import {
    Controller,
    Get,
    Param,
    Post,
    Body,
} from '@nestjs/common';
import { ContentsService } from '../service/contents.service';
import { MembersDTO } from '../DTO/contents/members.dto';

@Controller()
export class ContentsController {
    constructor(private readonly contentsService: ContentsService,) {}

    @Get('members/:grade')
    async findMembersByGrade(@Param('grade') grade: number): Promise<Object> {
        return await this.contentsService.getMembersByGrade(grade);
    }

    @Post('member')
    async addMember(
        @Body() memberData: MembersDTO
    ): Promise<Object> {
        console.log(memberData);
        return await this.contentsService.addMembers(memberData);
    }
}
