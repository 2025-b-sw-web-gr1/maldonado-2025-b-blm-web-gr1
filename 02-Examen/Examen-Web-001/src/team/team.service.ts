import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Team } from './team.entity';

@Injectable()
export class TeamService {
    constructor(
        @InjectRepository(Team)
        private teamsRepository: Repository<Team>,
    ) { }

    findAll(): Promise<Team[]> {
        return this.teamsRepository.find();
    }

    async findOne(id: number): Promise<Team> {
        const team = await this.teamsRepository.findOne({ where: { id } });
        if (!team) {
            throw new NotFoundException(`Team with ID ${id} not found`);
        }
        return team;
    }

    create(team: Partial<Team>): Promise<Team> {
        const newTeam = this.teamsRepository.create(team);
        return this.teamsRepository.save(newTeam);
    }

    async update(id: number, team: Partial<Team>): Promise<Team> {
        await this.findOne(id);
        await this.teamsRepository.update(id, team);
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.findOne(id);
        await this.teamsRepository.delete(id);
    }

    async findPlayers(id: number): Promise<any> {
        const team = await this.teamsRepository.findOne({
            where: { id },
            relations: ['players'],
        });
        if (!team) {
            throw new NotFoundException(`Team with ID ${id} not found`);
        }
        return team.players;
    }
}
