import { Controller, Get, Head } from '@nestjs/common';

@Controller('heartbeat')
export class HeartbeatController {
  @Get('')
  @Head('')
  heartbeat(): string {
    return 'OK';
  }
}
