import { Test, TestingModule } from '@nestjs/testing';
import { ConnectorsController } from './connectors.controller';
import { ConnectorsService } from './connectors.service';
import { CreateConnectorDto } from './dto/create-connector.dto';
import { Connector } from './entities/connector.entity';

const connectorsList: Connector[] = [
  new Connector({
    name: 'Amazon 2',
    description:
      'A Amazon, além de viciada em números, é louca pelos seus clientes. “Inovação com foco no cliente”, parece clichê, mas é esse o lema que move todos os colaboradores da loja virtual que tinha tudo para dar errado, mas se transformou em uma empresa de nível global.',
    logo_url: 'https://devapi-cms-blog.s3.amazonaws.com/Amazon_7e5092cd0f.png',
    base_url: 'https://www.amazon.com.br',
    category: 'E-commerce',
    type: 'REST',
    privacy: 'PUBLIC',
    status: 'ACTIVE',
    deleted_at: null,
  }),

  new Connector({
    name: 'PicPay',
    status: 'ACTIVE',
    description: 'PicPay faz com que seus pagamentos sejam mais simples.',
    category: 'Gateways de pagamento',
    logo_url: 'https://devapi.com.br/static/images/connectors/picpay.png',
    base_url: 'https://appws.picpay.com/ecommerce/public',
    privacy: 'PUBLIC',
    type: 'REST',
    deleted_at: null,
  }),

  new Connector({
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
  }),
];
const newConnector = new Connector({
  name: 'Amazon 2',
  type: 'TEST',
  privacy: 'PRIVATE',
  base_url: 'https://www.amazon.com.br',
  logo_url: 'https://devapi-cms-blog.s3.amazonaws.com/Amazon_7e5092cd0f.png',
  category: 'category3',
  description:
    'A Amazon, além de viciada em números, é louca pelos seus clientes. “Inovação com foco no cliente”, parece clichê, mas é esse o lema que move todos os colaboradores da loja virtual que tinha tudo para dar errado, mas se transformou em uma empresa de nível global.',
  status: 'ACTIVE',
  deleted_at: null,
});

const connector = new Connector({
  name: 'Bradesco',
  description:
    'Ser a opção preferencial do cliente, tanto no mundo físico quanto no digital, diferenciando-se por uma atuação eficiente e para todos os segmentos de mercado.',
  logo_url: 'https://devapi-cms-blog.s3.amazonaws.com/Bradesco_d7c54d4002.png',
  base_url: 'https://banco.bradesco/html/classic/index.shtm',
  category: 'Bank',
  type: 'REST',
  privacy: 'PUBLIC',
  status: 'ACTIVE',
  deleted_at: null,
});

describe('ConnectorsController', () => {
  let connectorsController: ConnectorsController;
  let connectorsService: ConnectorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [],
      controllers: [ConnectorsController],
      providers: [
        {
          provide: ConnectorsService,
          useValue: {
            create: jest.fn().mockResolvedValue(newConnector),
            findAll: jest.fn().mockResolvedValue(connectorsList),
            findOne: jest.fn().mockResolvedValue(connectorsList[0]),
            update: jest.fn().mockResolvedValue(connector),
            findByIdAndUpdate: jest.fn().mockResolvedValue(connector),
          },
        },
      ],
    }).compile();

    connectorsController =
      module.get<ConnectorsController>(ConnectorsController);
    connectorsService = module.get<ConnectorsService>(ConnectorsService);
  });

  it('should be defined', () => {
    expect(connectorsController).toBeDefined();
    expect(connectorsService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of connectors', async () => {
      const result = await connectorsController.findAll(null, null, null, null);

      expect(result).toEqual(connectorsList);
      expect(connectorsService.findAll).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest
        .spyOn(connectorsService, 'findAll')
        .mockRejectedValueOnce(new Error());

      expect(
        connectorsController.findAll(null, null, null, null),
      ).rejects.toThrowError();
    });
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      // Arrange
      const body: CreateConnectorDto = {
        name: 'Amazon 2',
        type: 'TEST',
        privacy: 'PRIVATE',
        base_url: 'https://www.amazon.com.br',
        logo_url:
          'https://devapi-cms-blog.s3.amazonaws.com/Amazon_7e5092cd0f.png',
        category: 'category3',
        description:
          'A Amazon, além de viciada em números, é louca pelos seus clientes. “Inovação com foco no cliente”, parece clichê, mas é esse o lema que move todos os colaboradores da loja virtual que tinha tudo para dar errado, mas se transformou em uma empresa de nível global.',
        status: 'ACTIVE',
        deleted_at: null,
      };

      const result = await connectorsController.create(body);

      expect(result).toEqual(newConnector);
      expect(connectorsService.create).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      const body: CreateConnectorDto = {
        name: 'Conta Bradesco',
        type: 'TEST',
        privacy: 'PRIVATE',
        base_url: 'https://banco.bradesco/html/classic/index.shtm',
        logo_url: 'logo1',
        category: 'category',
        description:
          'Ser a opção preferencial do cliente, tanto no mundo físico quanto no digital, diferenciando-se por uma atuação eficiente e para todos os segmentos de mercado',
        status: 'ACTIVE',
        deleted_at: null,
      };
      jest
        .spyOn(connectorsService, 'create')
        .mockRejectedValueOnce(new Error());

      expect(connectorsController.create(body)).rejects.toThrowError();
    });
  });

  describe('findOne', () => {
    it('should find a user successfully', async () => {
      const result = await connectorsController.findOne('1');

      expect(result).toEqual(connectorsList[0]);
      expect(connectorsService.findOne).toHaveBeenCalledTimes(1);
      expect(connectorsService.findOne).toHaveBeenCalledWith('1');
    });

    it('should throw an exception', () => {
      jest
        .spyOn(connectorsService, 'findOne')
        .mockRejectedValueOnce(new Error());

      expect(connectorsController.findOne('1')).rejects.toThrowError();
    });
  });

  describe('update', () => {
    it('should update a user successfully', async () => {
      const body: CreateConnectorDto = {
        name: 'Conta Bradesco',
        type: 'TEST',
        privacy: 'PRIVATE',
        base_url: 'https://banco.bradesco/html/classic/index.shtm',
        logo_url: 'logo1',
        category: 'category',
        description:
          'Ser a opção preferencial do cliente, tanto no mundo físico quanto no digital, diferenciando-se por uma atuação eficiente e para todos os segmentos de mercado',
        status: 'ACTIVE',
        deleted_at: null,
      };

      const result = await connectorsController.update('1', body);

      expect(result).toEqual(connector);
      expect(connectorsService.update).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      const body: CreateConnectorDto = {
        name: 'Conta Bradesco',
        type: 'TEST',
        privacy: 'PRIVATE',
        base_url: 'https://banco.bradesco/html/classic/index.shtm',
        logo_url: 'logo1',
        category: 'category',
        description:
          'Ser a opção preferencial do cliente, tanto no mundo físico quanto no digital, diferenciando-se por uma atuação eficiente e para todos os segmentos de mercado',
        status: 'ACTIVE',
        deleted_at: null,
      };
      jest
        .spyOn(connectorsService, 'update')
        .mockRejectedValueOnce(new Error());

      expect(connectorsController.update('1', body)).rejects.toThrowError();
    });
  });

  describe('findByIdAndUpdate', () => {
    it('should soft delete a user successfully', async () => {
      const result = await connectorsController.update('1', {
        deleted_at: new Date(),
      });

      expect(result).toEqual(connector);
      expect(connectorsService.update).toHaveBeenCalledTimes(1);
    });

    it('should throw an exception', () => {
      jest
        .spyOn(connectorsService, 'update')
        .mockRejectedValueOnce(new Error());

      expect(
        connectorsController.update('1', { deleted_at: new Date() }),
      ).rejects.toThrowError();
    });
  });
});
