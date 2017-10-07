import { Injectable } from '@angular/core';

import { User } from './user';
import { Userlist } from './mock-userlist';

@Injectable()
export class MyDataServiceService {

  constructor() { }

  getUsers(): User[] {
    return Userlist;
  }

}
