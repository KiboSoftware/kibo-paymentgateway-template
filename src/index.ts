import host from '@kibocommerce/kibo-paymentgateway-hosting'
import { CustomAdapterFactory } from './CustomAdapterFactory'

const factory = new CustomAdapterFactory()
host(factory)
