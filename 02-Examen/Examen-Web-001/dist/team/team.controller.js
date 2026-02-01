"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamController = void 0;
const common_1 = require("@nestjs/common");
const team_service_1 = require("./team.service");
const team_entity_1 = require("./team.entity");
const swagger_1 = require("@nestjs/swagger");
const create_team_dto_1 = require("./dto/create-team.dto");
const update_team_dto_1 = require("./dto/update-team.dto");
let TeamController = class TeamController {
    constructor(teamService) {
        this.teamService = teamService;
    }
    findAll() {
        return this.teamService.findAll();
    }
    findOne(id) {
        return this.teamService.findOne(+id);
    }
    create(createTeamDto) {
        return this.teamService.create(createTeamDto);
    }
    update(id, updateTeamDto) {
        return this.teamService.update(+id, updateTeamDto);
    }
    remove(id) {
        return this.teamService.remove(+id);
    }
    findPlayers(id) {
        return this.teamService.findPlayers(+id);
    }
};
exports.TeamController = TeamController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all teams' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all teams.', type: [team_entity_1.Team] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TeamController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a team by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return the team.', type: team_entity_1.Team }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new team' }),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The team has been successfully created.', type: team_entity_1.Team }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", void 0)
], TeamController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a team by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The team has been successfully updated.', type: team_entity_1.Team }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_team_dto_1.UpdateTeamDto]),
    __metadata("design:returntype", void 0)
], TeamController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a team by ID' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'The team has been successfully deleted.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)(':id/players'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all players of a team' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Return all players of the team.' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamController.prototype, "findPlayers", null);
exports.TeamController = TeamController = __decorate([
    (0, swagger_1.ApiTags)('teams'),
    (0, common_1.Controller)('teams'),
    __metadata("design:paramtypes", [team_service_1.TeamService])
], TeamController);
//# sourceMappingURL=team.controller.js.map