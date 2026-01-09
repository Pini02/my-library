import { Module } from '@nestjs/common';
import { RentService } from './rent.service';
import { ConnectionModule } from '@app/connection';

@Module({
  imports: [ConnectionModule],
  providers: [RentService],
  exports: [RentService],
})
export class RentModule {}
