import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { User } from "./user.entity";

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}
  @Post()
  createUser(@Body() newUserDto: CreateUserDto) : Promise<User> {
    return this.usersService.createUser(newUserDto)
  }

  @Get()
  getUsers(): Promise<User[]> {
    return this.usersService.getUsers()
  }

  @Get(':id')
  getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.usersService.getUser(id)
  }
}
