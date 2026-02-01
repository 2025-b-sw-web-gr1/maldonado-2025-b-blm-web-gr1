import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Team } from '../team/team.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Player {
    @ApiProperty({ example: 1, description: 'The unique identifier of the player' })
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty({ example: 'Luka Modric', description: 'The name of the player' })
    @Column()
    name: string;

    @ApiProperty({ example: 'Midfielder', description: 'The position of the player' })
    @Column()
    position: string;

    @ManyToOne(() => Team, (team) => team.players)
    team: Team;
}
