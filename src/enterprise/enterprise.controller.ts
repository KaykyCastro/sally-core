import { Controller, Post, Get, Delete, Body, Param, Put } from '@nestjs/common';
import { EnterprisesService } from './enterprise.service';

import { EnterpriseCreateDto } from './dto/enterprise-create.dto';
import { EnterpriseDto } from './dto/enterprise.dto';
import { EnterpriseUpdateDto } from './dto/enterprise.update.dto';

@Controller('enterprise')
export class EnterpriseController {
  constructor(private readonly enterprisesService: EnterprisesService) {}
  
  @Post()
  async createEnterprise(@Body() enterprise: EnterpriseCreateDto) {
    return this.enterprisesService.create(enterprise);
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    console.log("No controller", id);
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
