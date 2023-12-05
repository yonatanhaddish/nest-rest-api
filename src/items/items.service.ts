import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private readonly itemModel: any) {}

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  }
  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({ _id: id });
  }
  async createItem(CreateItemDto: Item): Promise<Item> {
    return await this.itemModel.create(CreateItemDto);
  }
  async deleteItem(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndDelete(id);
  }
  async updateItem(id: string, CreateItemDto: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, CreateItemDto, {
      new: true,
    });
  }
}
