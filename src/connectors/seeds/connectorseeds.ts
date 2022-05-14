/* eslint-disable prettier/prettier */
import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';

import { ConnectorsService } from '../connectors.service';
@Injectable()
export class ConnectorsSeed {
  constructor(private readonly connectorsService: ConnectorsService) {}

  @Command({
    command: 'create:connector',
    describe: 'create connectors',
  })
  async run() {
    await this.connectorsService.add([
      {
        name: 'Amazon',
        description:
          'A Amazon, além de viciada em números, é louca pelos seus clientes. “Inovação com foco no cliente”, parece clichê, mas é esse o lema que move todos os colaboradores da loja virtual que tinha tudo para dar errado, mas se transformou em uma empresa de nível global.',
        logo_url:
          'https://devapi-cms-blog.s3.amazonaws.com/Amazon_7e5092cd0f.png',
        base_url: 'https://www.amazon.com.br',
        category: 'E-commerce',
        type: 'REST',
        privacy: 'PUBLIC',
        status: 'ACTIVE',
        deleted_at: null,
      },
      {
        name: 'BrasPress',
        description:
          'Empresa líder no Brasil no transporte de encomendas, a BRASPRESS é a única do setor que atende todo o território nacional com uma frota própria de 2.890 veículos.',
        logo_url:
          'https://devapi-cms-blog.s3.amazonaws.com/Braspress_e6acd16c90.png',
        base_url: 'https://www.braspress.com/a-braspress/',
        category: 'Logistic',
        type: 'REST',
        privacy: 'PUBLIC',
        status: 'ACTIVE',
        deleted_at: null,
      },
      {
        name: 'Trello',
        description:
          'O Trello é uma ferramenta de colaboração que organiza seus projetos em painéis. À primeira vista, saiba o que está sendo trabalhado, quem está trabalhando no quê e onde algo está em processo.',
        logo_url: 'https://devapi.com.br/static/images/connectors/trello.png',
        base_url: 'https://api.trello.com/1',
        category: {
          id: '606212ea3f2727a3f876dc0d',
          name: 'Produtividade',
        },
        type: 'REST',
        privacy: 'PRIVATE',
        status: 'ACTIVE',
        deleted_at: null,
      },
      {
        name: 'Bradesco',
        description:
          'Ser a opção preferencial do cliente, tanto no mundo físico quanto no digital, diferenciando-se por uma atuação eficiente e para todos os segmentos de mercado.',
        logo_url:
          'https://devapi-cms-blog.s3.amazonaws.com/Bradesco_d7c54d4002.png',
        base_url: 'https://banco.bradesco/html/classic/index.shtm',
        category: 'Bank',
        type: 'REST',
        privacy: 'PUBLIC',
        status: 'ACTIVE',
        deleted_at: null,
      },
      {
        name: 'Discord',
        description:
          'O Discord é Onde você e alguns amigos possam passar um tempo juntos. Um lugar que torna fácil conversar todos os dias e socializar com mais frequência.',
        logo_url:
          'https://devapi-cms-blog.s3.amazonaws.com/Discord_cf66a3a651.png',
        base_url: 'https://discord.com://api.anymarket.com.br/v2',
        category: 'Social',
        type: 'REST',
        privacy: 'PUBLIC',
        status: 'ACTIVE',
        deleted_at: null,
      },

      {
        name: 'PicPay',
        description: 'PicPay faz com que seus pagamentos sejam mais simples.',
        logo_url: 'https://devapi.com.br/static/images/connectors/picpay.png',
        base_url: 'https://appws.picpay.com/ecommerce/public',
        category: 'Gateways de pagamento',
        type: 'REST',
        privacy: 'PUBLIC',
        status: 'ACTIVE',
        deleted_at: null,
      },
    ]);
  }
}
