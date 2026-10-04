import { Controller, Post, Get, Delete, Body, Param, Put } from '@nestjs/common';
import { EnterprisesService } from './enterprises.service';

import { EnterpriseCreateDto } from './dto/enterprise-create.dto';
import { EnterpriseDto } from './dto/enterprise.dto';
import { EnterpriseUpdateDto } from './dto/enterprise.update.dto';

@Controller('enterprises')
export class EnterprisesController {
  constructor(private readonly enterprisesService: EnterprisesService) {}
  
  @Post()
  async createEnterprise(@Body() enterprise: EnterpriseCreateDto) {
    return this.enterprisesService.create(enterprise);
  }

  @Get()
  async findById(@Param('id') id: string) {
    return this.enterprisesService.findEnterpriseById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() enterprise: EnterpriseUpdateDto) {
    return this.enterprisesService.update(id, enterprise);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.enterprisesService.delete(id);
  }

}
