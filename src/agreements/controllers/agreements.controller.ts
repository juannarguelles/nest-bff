import { Controller, Get } from '@nestjs/common';
import { AgreementsService } from '../services/agreements.service';

@Controller('agreements')
export class AgreementsController {
  constructor(private readonly agreementService: AgreementsService) {}

  @Get()
  getAllAgreements(): Promise<any> {
    return this.agreementService.getAllAgreements();
  }
 
}