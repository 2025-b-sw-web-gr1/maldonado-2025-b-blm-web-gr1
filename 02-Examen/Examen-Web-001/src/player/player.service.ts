import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Player } from './player.entity';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@Injectable()
export class PlayerService {
    constructor(
        @InjectRepository(Player)
        private playersRepository: Repository<Player>,
    ) { }

    findAll(): Promise<Player[]> {
        return this.playersRepository.find({ relations: ['team'] });
    }

    async findOne(id: number): Promise<Player> {
        const player = await this.playersRepository.findOne({ where: { id }, relations: ['team'] });
        if (!player) {
            throw new NotFoundException(`Player with ID ${id} not found`);
        }
        return player;
    }

    create(createPlayerDto: CreatePlayerDto): Promise<Player> {
        const { teamId, ...playerData } = createPlayerDto;
        const newPlayer = this.playersRepository.create({
            ...playerData,
            team: { id: teamId } as any
        });
        return this.playersRepository.save(newPlayer);
    }

    async update(id: number, updatePlayerDto: UpdatePlayerDto): Promise<Player> {
        await this.findOne(id);
        const { teamId, ...playerData } = updatePlayerDto;

        const updateData: any = { ...playerData };
        if (teamId) {
            updateData.team = { id: teamId };
        }

        await this.playersRepository.save({ id, ...updateData });
        return this.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.findOne(id);
        await this.playersRepository.delete(id);
    }
}
