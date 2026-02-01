import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { TeamService } from './team.service';
import { Team } from './team.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';

@ApiTags('teams')
@Controller('teams')
export class TeamController {
    constructor(private readonly teamService: TeamService) { }

    @Get()
    @ApiOperation({ summary: 'Get all teams' })
    @ApiResponse({ status: 200, description: 'Return all teams.', type: [Team] })
    findAll() {
        return this.teamService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a team by ID' })
    @ApiResponse({ status: 200, description: 'Return the team.', type: Team })
    findOne(@Param('id') id: string) {
        return this.teamService.findOne(+id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new team' })
    @ApiResponse({ status: 201, description: 'The team has been successfully created.', type: Team })
    create(@Body() createTeamDto: CreateTeamDto) {
        return this.teamService.create(createTeamDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a team by ID' })
    @ApiResponse({ status: 200, description: 'The team has been successfully updated.', type: Team })
    update(@Param('id') id: string, @Body() updateTeamDto: UpdateTeamDto) {
        return this.teamService.update(+id, updateTeamDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a team by ID' })
    @ApiResponse({ status: 200, description: 'The team has been successfully deleted.' })
    remove(@Param('id') id: string) {
        return this.teamService.remove(+id);
    }

    @Get(':id/players')
    @ApiOperation({ summary: 'Get all players of a team' })
    @ApiResponse({ status: 200, description: 'Return all players of the team.' })
    findPlayers(@Param('id') id: string) {
        return this.teamService.findPlayers(+id);
    }
}
