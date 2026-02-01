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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlayerDto = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class CreatePlayerDto {
}
exports.CreatePlayerDto = CreatePlayerDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Luka Modric', description: 'The name of the player' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'name is required' }),
    __metadata("design:type", String)
], CreatePlayerDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Midfielder', description: 'The position of the player' }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'position is required' }),
    __metadata("design:type", String)
], CreatePlayerDto.prototype, "position", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 1, description: 'The ID of the team the player belongs to' }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)({ message: 'teamId is required' }),
    __metadata("design:type", Number)
], CreatePlayerDto.prototype, "teamId", void 0);
//# sourceMappingURL=create-player.dto.js.map