import { TeamService } from './team.service';
import { Team } from './team.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
export declare class TeamController {
    private readonly teamService;
    constructor(teamService: TeamService);
    findAll(): Promise<Team[]>;
    findOne(id: string): Promise<Team>;
    create(createTeamDto: CreateTeamDto): Promise<Team>;
    update(id: string, updateTeamDto: UpdateTeamDto): Promise<Team>;
    remove(id: string): Promise<void>;
    findPlayers(id: string): Promise<any>;
}
