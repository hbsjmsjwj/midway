import { Get, Controller } from '@midwayjs/decorator';

@Controller('/', { middleware: ['auth']})
export class HelloAliyunService {
  @Get('/aliyun_invoke')
  async invoke() {}
}
