import { Repository } from 'typeorm';
import { Team } from './team.entity';
export declare class TeamService {
    private teamsRepository;
    constructor(teamsRepository: Repository<Team>);
    findAll(): Promise<Team[]>;
    findOne(id: number): Promise<Team>;
    create(team: Partial<Team>): Promise<Team>;
    update(id: number, team: Partial<Team>): Promise<Team>;
    remove(id: number): Promise<void>;
    findPlayers(id: number): Promise<any>;
}
