import type {
  AdapterContext,
  PaymentGatwayAdapter,
  CaptureRequest,
  CreditRequest,
  GatewayAuthorizationRequest,
  GatewayAuthorizeResponse,
  GatewayCaptureResponse,
  GatewayCreditResponse,
  GatewayDebitResponse,
  GatewayGetGiftCardBalanceRequest,
  GatewayGetGiftCardBalanceResponse,
  GatewayGiftCardCreateRequest,
  GatewayGiftCardCreateResponse,
  GatewayVoidResponse,
  Logger,
} from '@kibocommerce/kibo-paymentgateway-hosting'
import type { CustomAdapterSettings } from './types'
export class CustomGatewayAdapter implements PaymentGatwayAdapter {
  context: AdapterContext
  logger: Logger
  settings?: CustomAdapterSettings
  constructor(context: AdapterContext, logger: Logger, settings?: CustomAdapterSettings) {
    this.context = context
    this.logger = logger
    this.settings = settings
  }
  async authorize(request: GatewayAuthorizationRequest): Promise<GatewayAuthorizeResponse> {
    //   this.logger.info('info message');
    //   example response
    //   return {
    //     authCode: "CAPTURED",
    //     responseCode: "food",
    //     responseText : "Captured via CustomGatewayAdapter"
    //   };
    throw new Error('Method not implemented.')
  }
  async authorizeWithToken(
    request: GatewayAuthorizationRequest
  ): Promise<GatewayAuthorizeResponse> {
    throw new Error('Method not implemented.')
  }
  async capture(request: CaptureRequest): Promise<GatewayCaptureResponse> {
    throw new Error('Method not implemented.')
  }
  async credit(request: CreditRequest): Promise<GatewayCreditResponse> {
    throw new Error('Method not implemented.')
  }
  async void(request: CaptureRequest): Promise<GatewayVoidResponse> {
    throw new Error('Method not implemented.')
  }
  async authorizeAndCapture(request: GatewayAuthorizationRequest): Promise<GatewayDebitResponse> {
    throw new Error('Method not implemented.')
  }
  async authorizeAndCaptureWithToken(
    request: GatewayAuthorizationRequest
  ): Promise<GatewayDebitResponse> {
    throw new Error('Method not implemented.')
  }
  async createGiftCard(
    request: GatewayGiftCardCreateResponse
  ): Promise<GatewayGiftCardCreateRequest> {
    throw new Error('Method not implemented.')
  }
  async getBalance(
    request: GatewayGetGiftCardBalanceRequest
  ): Promise<GatewayGetGiftCardBalanceResponse> {
    throw new Error('Method not implemented.')
  }
}
