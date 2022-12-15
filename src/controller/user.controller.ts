import { Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUser(): string {
    return `Hello user name`;
  }
  @Get(':userId')
  getUserId(@Param('userId') userId: string) {
    return `El ID de usuario es ${userId}`;
  }
}
