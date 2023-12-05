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
  findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }
  @Get(':id')
  findOne(@Param() param): Promise<Item> {
    return this.itemsService.findOne(param.id);
  }
  @Post()
  create(@Body() CreateItemDto): Promise<Item> {
    return this.itemsService.createItem(CreateItemDto);
  }
  @Delete(':id')
  delete(@Param('id') id): Promise<Item> {
    return this.itemsService.deleteItem(id);
  }
  @Put(':id')
  update(@Param() param, @Body() CreateItemDto): Promise<Item> {
    return this.itemsService.updateItem(param.id, CreateItemDto);
  }
}
