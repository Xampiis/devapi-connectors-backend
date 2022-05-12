/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Command } from 'nestjs-command';
import { UsersService } from '../users.service';

@Injectable()
export class UsersSeed {
  constructor(private readonly usersService: UsersService) {}
  @Command({
    command: 'create:user',
    describe: 'create a user',
  })
  async create() {
    await this.usersService.add({
      name: 'Go DevApi',
      email: 'godevapi@devapi.com',
      password: '1234567',
      deleted_at: null,
    });
  }
}
