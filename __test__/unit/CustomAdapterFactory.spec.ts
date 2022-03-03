import { CustomGatewayAdapter } from '../../src/CustomGatewayAdapter'
import { CustomAdapterFactory } from '../../src/CustomAdapterFactory'
import { mockAdapterContext } from '../../__mocks__/AdapterContext'
import { mockLoggerFactory } from '../../__mocks__/LoggerFactory'
jest.mock('../../src/CustomGatewayAdapter')

describe('Kibo Payment Gateway - Custom Adapter Factory ', () => {
  it('should create custom gateway adapter', () => {
    const factory = new CustomAdapterFactory()
    const logger = mockLoggerFactory()
    const adapter = factory.createAdapter(mockAdapterContext, logger)
    expect(CustomGatewayAdapter).toHaveBeenCalledTimes(1)
  })
})
