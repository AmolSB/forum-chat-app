//  controllers are responsible for mapping endpoints to functionalities.

import {Controller, Get} from "@nestjs/common";

@Controller('testing')
export class TestingController {
    @Get()
    async getTesting(): Promise<any> {
        return ['hello', 'world'];
    }
}
