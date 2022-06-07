import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/enteties/user.entity';
import { AuthService } from './auth.service';
import { CurrentUser } from './current-user.decorator';
import { LoginResponse } from './dto/login-response';
import { LoginUserInput } from './dto/login-user.input';
import { SignUpResponse } from './dto/signup-response';
import { GqlAuthGuard } from './guards/gql-auth.guard';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => LoginResponse)
  @UseGuards(GqlAuthGuard)
  login(
    @Args('loginUserInput') loginUserInput: LoginUserInput,
    @CurrentUser() user: User,
  ) {
    return this.authService.login(user);
  }

  @Mutation(() => SignUpResponse)
  signUp(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.signUp(loginUserInput);
  }
}
