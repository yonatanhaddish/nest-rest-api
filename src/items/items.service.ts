import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '3456',
      name: 'Item One',
      description: 'This is item01',
      qty: 8,
    },
    {
      id: '14825',
      name: 'Item Two',
      description: 'This is item02',
      qty: 12,
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }

  createItem(createItemDto): void {
    createItemDto;
    this.items.push(createItemDto);
  }

  deleteItem(id: string): void {
    const index = this.items.indexOf(this.items.find((item) => item.id === id));
    if (index != -1) {
      this.items.splice(index, 1);
    }
  }
  updateItem(id: string, updateItemDto): Item {
    const itemToBeUpdated = this.items.find((item) => item.id === id);
    console.log(updateItemDto);
    console.log(itemToBeUpdated);

    itemToBeUpdated.id = Math.floor(Math.random() * 10).toString();
    itemToBeUpdated.name = updateItemDto.name;
    itemToBeUpdated.description = updateItemDto.description;
    itemToBeUpdated.qty = updateItemDto.qty;

    console.log(this.items);
    return;
  }
}
