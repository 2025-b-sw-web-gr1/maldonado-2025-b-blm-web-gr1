import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Player } from '../player/player.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Team {
    @ApiProperty({ example: 1, description: 'The unique identifier of the team' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Real Madrid', description: 'The name of the team' })
    @Column()
    name: string;

    @ApiProperty({ example: 'Spain', description: 'The country of the team' })
    @Column()
    country: string;

    @OneToMany(() => Player, (player) => player.team)
    players: Player[];
}
