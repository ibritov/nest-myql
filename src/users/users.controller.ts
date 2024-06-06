import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {

  constructor(private readonly usersService: UsersService) {}
  @Post()
  createUser(@Body() newUserDto: CreateUserDto) {
    return this.usersService.createUser(newUserDto)
  }
}
