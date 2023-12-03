import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
} from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findOne(@Param() param): Item {
    return this.itemsService.findOne(param.id);
  }
  @Post()
  create(@Body() CreateItemDto: CreateItemDto): string {
    return `Name: ${CreateItemDto.name} Desc: ${CreateItemDto.description}`;
  }
  @Delete(':id')
  delete(@Param() param): string {
    return `Item deleted: ${param.id}`;
  }
  @Put(':id')
  update(@Param() param, @Body() updateItemDto: CreateItemDto): string {
    return `Item ${param.id} updated - Name: ${updateItemDto.name}`;
  }
}
