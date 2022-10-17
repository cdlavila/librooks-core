import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { AdminsService } from '../services/admins.service';
import { CreateAdminDto } from '../dtos/admins.dto';
import { CreateUserDto } from '../dtos/users.dto';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() adminPayload: CreateAdminDto,
    @Body('user') userPayload: CreateUserDto,
  ) {
    return {
      statusCode: HttpStatus.CREATED,
      message: 'Administrador creado exitosamente',
      data: await this.adminsService.create(adminPayload, userPayload),
    };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id') id: string) {
    return {
      statusCode: HttpStatus.OK,
      message: `Administrador ${id} encontrado existosamente`,
      data: await this.adminsService.findOne(id),
    };
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll() {
    return {
      statusCode: HttpStatus.OK,
      message: `Administradores encontrados exitosamente`,
      data: await this.adminsService.findAll(),
    };
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async update(
    @Param('id') id: string,
    @Body() adminPayload: CreateAdminDto,
    @Body('user') userPayload: CreateUserDto,
  ) {
    return {
      statusCode: HttpStatus.OK,
      message: `Administrador ${id} actualizado exitosamente`,
      data: await this.adminsService.update(id, adminPayload, userPayload),
    };
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async remove(@Param('id') id: string) {
    return this.adminsService.delete(id);
  }
}
