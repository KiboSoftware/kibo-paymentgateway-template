import { Logger } from '@kibocommerce/kibo-paymentgateway-hosting'
export const mockLoggerFactory = () => {
  const logger = {
    info: jest.fn(),
    error: jest.fn(),
    warn: jest.fn(),
    debug: jest.fn(),
  } as unknown
  return logger as Logger
}
