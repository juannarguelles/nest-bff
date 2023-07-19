import { Injectable } from '@nestjs/common';

@Injectable()
export class AgreementsService {
  constructor() {}
  private list: any = [
    {
      idAgreement: '12345',
      idCliente: '8786577',
      name: 'FIAT S.R.L.',
      description: 'FIAT Oeste',
    },
    {
      idAgreement: '12345',
      idCliente: '656059',
      name: 'FIAT S.R.L.',
      description: 'FIAT Oeste',
    },
    {
      idAgreement: '12345',
      idCliente: '343543',
      name: 'FIAT S.R.L.',
      description: 'FIAT Oeste',
    },
    {
      idAgreement: '55840',
      idCliente: '4545223',
      name: 'FIAT S.R.L.',
      description: 'FIAT Centro',
    },
    {
      idAgreement: '12348',
      idCliente: '565743232',
      name: 'FIAT S.R.L.',
      description: '',
    },
    {
      idAgreement: '12346',
      idCliente: '4545232',
      name: 'FIAT S.R.L.',
      description: '',
    },
  ]

  getAllAgreements() {
    return this.list;
}
}