import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamModule } from './team/team.module';
import { PlayerModule } from './player/player.module';
import { Team } from './team/team.entity';
import { Player } from './player/player.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db.sqlite',
            entities: [Team, Player],
            synchronize: true,
        }),
        TeamModule,
        PlayerModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule { }
