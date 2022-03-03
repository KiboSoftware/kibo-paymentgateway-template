import host from '@kibocommerce/kibo-paymentgateway-hosting'
import { CustomAdapterFactory } from './CustomAdapterFactory'
import config from './Config'

const settings = config.get('settings')
const factory = new CustomAdapterFactory(settings)

host(factory)
