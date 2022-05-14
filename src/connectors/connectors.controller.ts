import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ConnectorsService } from './connectors.service';
import { CreateConnectorDto } from './dto/create-connector.dto';
import { UpdateConnectorDto } from './dto/update-connector.dto';

@Controller('connectors')
export class ConnectorsController {
  constructor(private readonly connectorsService: ConnectorsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createConnectorDto: CreateConnectorDto) {
    return this.connectorsService.create(createConnectorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query('name') name: string,
    @Query('category') category: string,
    @Query('type') type: string,
    @Query('privacy') privacy: string,
  ) {
    return this.connectorsService.findAll(name, category, type, privacy);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connectorsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConnectorDto: UpdateConnectorDto,
  ) {
    return this.connectorsService.update(id, updateConnectorDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.connectorsService.remove(id);
  }
}
