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
      id: '1482',
      name: 'Item Two',
      description: 'This is item02',
      qty: 12,
    },
  ];

  findAll(): Item[] {
    console.log('Test');
    return this.items;
  }

  findOne(id: string): Item {
    this.items.map((item) => {
      console.log(`id: ${id}`);
    });
    console.log('Test');
    return;
  }
}
