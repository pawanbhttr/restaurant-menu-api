import { Controller, HttpCode, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AccountService } from "src/infrastructure/services/account.service";

@ApiTags("Account")
@Controller("api")
export class AccountController {
    constructor(private readonly accountService: AccountService){}

    @Post("login")
    @HttpCode(200)
    login(): void {
        this.accountService.validateUser();
    }
}