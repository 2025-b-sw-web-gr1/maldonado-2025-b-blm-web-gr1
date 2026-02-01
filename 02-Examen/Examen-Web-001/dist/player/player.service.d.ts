import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
export declare class PlayerService {
    private playersRepository;
    constructor(playersRepository: Repository<Player>);
    findAll(): Promise<Player[]>;
    findOne(id: number): Promise<Player>;
    create(createPlayerDto: CreatePlayerDto): Promise<Player>;
    update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player>;
    remove(id: number): Promise<void>;
}
