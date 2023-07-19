import { Module } from '@nestjs/common';

import { AgreementsController } from './controllers/agreements.controller';
import { AgreementsService } from './services/agreements.service';

@Module({
  controllers: [AgreementsController],
  providers: [AgreementsService],
})
export class AgreementsModule {}