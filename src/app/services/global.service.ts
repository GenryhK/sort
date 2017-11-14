import {Injectable} from '@angular/core';

@Injectable()
export class GlobalService {

  afterSort: object [];
  beforeSort: object [] = [

    {
      name: 'Антон',
      age: 30
    },
    {
      name: 'Петя',
      age: 45
    },
    {
      name: 'Вася',
      age: 17
    },
    {
      name: 'Коля',
      age: 3
    },
    {
      name: 'Саша',
      age: 6
    },
        {
      name: 'Коля',
      age: 3
    }
  ];
  toSort: object [];

  sortAge(first, second) {
    return first.age - second.age;
  };

  sortName(a, b) { 
  if(a.name[0] < b.name[0]) return -1;
  if(a.name[0] > b.name[0]) return 1;
    return 0;
  };

  sortByAge() {
    this.toSort = this.beforeSort.slice(0);
    this.afterSort = this.toSort.sort(this.sortAge)
  };

  sortByName() {
    this.toSort = this.beforeSort.slice(0);
    this.afterSort = this.toSort.sort(this.sortName)
  }

  constructor() {
  }

}
