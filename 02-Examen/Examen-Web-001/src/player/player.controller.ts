import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Player } from './player.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';

@ApiTags('players')
@Controller('players')
export class PlayerController {
    constructor(private readonly playerService: PlayerService) { }

    @Get()
    @ApiOperation({ summary: 'Get all players' })
    @ApiResponse({ status: 200, description: 'Return all players.', type: [Player] })
    findAll() {
        return this.playerService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Get a player by ID' })
    @ApiResponse({ status: 200, description: 'Return the player.', type: Player })
    findOne(@Param('id') id: string) {
        return this.playerService.findOne(+id);
    }

    @Post()
    @ApiOperation({ summary: 'Create a new player' })
    @ApiResponse({ status: 201, description: 'The player has been successfully created.', type: Player })
    create(@Body() createPlayerDto: CreatePlayerDto) {
        return this.playerService.create(createPlayerDto);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Update a player by ID' })
    @ApiResponse({ status: 200, description: 'The player has been successfully updated.', type: Player })
    update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
        return this.playerService.update(+id, updatePlayerDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Delete a player by ID' })
    @ApiResponse({ status: 200, description: 'The player has been successfully deleted.' })
    remove(@Param('id') id: string) {
        return this.playerService.remove(+id);
    }
}
