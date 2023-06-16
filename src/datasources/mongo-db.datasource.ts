import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'MongoDb',
  connector: 'mongodb',
  url: 'mongodb+srv://e-commerce_user:6AzIlUzh8iiyJtp9@cluster1.ns8zqqu.mongodb.net/e-comerce?retryWrites=true&w=majority',
  host: 'localhost',
  port: 27017,
  user: 'e-commerce_user',
  password: '6AzIlUzh8iiyJtp9',
  database: 'e-comerce',
  useNewUrlParser: true,
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDbDataSource
  extends juggler.DataSource
  implements LifeCycleObserver
{
  static dataSourceName = 'MongoDb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.MongoDb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}