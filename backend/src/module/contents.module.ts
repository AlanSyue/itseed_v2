import { Module } from '@nestjs/common';
import { ContentsController } from '../controller/contents.controller';
import { ContentsService } from '../service/contents.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Members } from '../entity/members.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Members])],
    controllers: [ContentsController],
    providers: [ContentsService],
})
export class ContentsModule { }
