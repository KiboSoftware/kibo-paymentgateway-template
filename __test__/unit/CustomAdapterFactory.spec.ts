import { CustomGatewayAdapter } from '../../src/CustomGatewayAdapter'
import { CustomAdapterFactory } from '../../src/CustomAdapterFactory'
import { mockAdapterContext } from '../../__mocks__/AdapterContext'

jest.mock('../../src/CustomGatewayAdapter')

describe('Kibo Payment Gateway - Custom Adapter Factory ', () => {
  it('should create custom gateway adapter', () => {
    const factory = new CustomAdapterFactory()
    const adapter = factory.createAdapter(mockAdapterContext, {})
    expect(CustomGatewayAdapter).toHaveBeenCalledTimes(1)
  })
})
