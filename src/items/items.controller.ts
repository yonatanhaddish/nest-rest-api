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
  create(@Body() createItemDto: CreateItemDto): void {
    this.itemsService.createItem(createItemDto);
  }
  @Delete(':id')
  delete(@Param() param): void {
    this.itemsService.deleteItem(param.id);
  }
  @Put(':id')
  update(@Param() param, @Body() updateItemDto: CreateItemDto): void {
    this.itemsService.updateItem(param.id, updateItemDto);
  }
}
