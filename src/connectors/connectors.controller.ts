import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ConnectorsService } from './connectors.service';
import { CreateConnectorDto } from './dto/create-connector.dto';
import { UpdateConnectorDto } from './dto/update-connector.dto';

@Controller('connectors')
export class ConnectorsController {
  constructor(private readonly connectorsService: ConnectorsService) {}

  @Post()
  create(@Body() createConnectorDto: CreateConnectorDto) {
    return this.connectorsService.create(createConnectorDto);
  }

  @Get()
  findAll(
    @Query('name') name: string,
    @Query('category') category: string,
    @Query('type') type: string,
    @Query('privacy') privacy: string,
  ) {
    return this.connectorsService.findAll(name, category, type, privacy);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.connectorsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConnectorDto: UpdateConnectorDto,
  ) {
    return this.connectorsService.update(id, updateConnectorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.connectorsService.remove(id);
  }
}
