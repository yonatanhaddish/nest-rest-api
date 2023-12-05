import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }

  // createItem(createItemDto): void {
  //   createItemDto;
  //   this.items.push(createItemDto);
  // }

  // deleteItem(id: string): void {
  //   const index = this.items.indexOf(this.items.find((item) => item.id === id));
  //   if (index != -1) {
  //     this.items.splice(index, 1);
  //   }
  // }
  // updateItem(id: string, updateItemDto): Item {
  //   const itemToBeUpdated = this.items.find((item) => item.id === id);
  //   console.log(updateItemDto);
  //   console.log(itemToBeUpdated);

  //   itemToBeUpdated.id = Math.floor(Math.random() * 10).toString();
  //   itemToBeUpdated.name = updateItemDto.name;
  //   itemToBeUpdated.description = updateItemDto.description;
  //   itemToBeUpdated.qty = updateItemDto.qty;

  //   console.log(this.items);
  //   return;
  // }
}
