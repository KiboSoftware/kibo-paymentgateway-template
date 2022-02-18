import {
  AdapterFactory,
  AdapterContext,
  PaymentGatwayAdapter,
} from '@kibocommerce/kibo-paymentgateway-hosting'
import { CustomGatewayAdapter } from './CustomGatewayAdapter'

export class CustomAdapterFactory implements AdapterFactory {
  createAdapter(context: AdapterContext, logger: any): PaymentGatwayAdapter {
    return new CustomGatewayAdapter(context, logger)
  }
}
