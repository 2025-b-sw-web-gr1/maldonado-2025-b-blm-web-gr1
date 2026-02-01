import { IsString, IsNotEmpty, IsArray, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTeamDto {
    @ApiProperty({ example: 'Real Madrid', description: 'The name of the team' })
    @IsString()
    @IsNotEmpty({ message: 'name is required' })
    name: string;

    @ApiProperty({ example: 'Spain', description: 'The country of the team' })
    @IsString()
    @IsNotEmpty({ message: 'country is required' })
    country: string;
}
