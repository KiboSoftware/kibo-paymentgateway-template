import {
  AdapterFactory,
  AdapterContext,
  PaymentGatwayAdapter,
  Logger,
} from '@kibocommerce/kibo-paymentgateway-hosting'
import { CustomGatewayAdapter } from './CustomGatewayAdapter'
import type { CustomAdapterSettings } from './types'
export class CustomAdapterFactory implements AdapterFactory<CustomAdapterSettings> {
  settings?: CustomAdapterSettings
  constructor(settings?: CustomAdapterSettings) {
    this.settings = settings
  }
  createAdapter(context: AdapterContext, logger: Logger): PaymentGatwayAdapter {
    return new CustomGatewayAdapter(context, logger, this.settings)
  }
}
