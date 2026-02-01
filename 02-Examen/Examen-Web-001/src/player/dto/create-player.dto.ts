import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePlayerDto {
    @ApiProperty({ example: 'Luka Modric', description: 'The name of the player' })
    @IsString()
    @IsNotEmpty({ message: 'name is required' })
    name: string;

    @ApiProperty({ example: 'Midfielder', description: 'The position of the player' })
    @IsString()
    @IsNotEmpty({ message: 'position is required' })
    position: string;

    @ApiProperty({ example: 1, description: 'The ID of the team the player belongs to' })
    @IsNumber()
    @IsNotEmpty({ message: 'teamId is required' })
    teamId: number;
}
