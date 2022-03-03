import { CustomGatewayAdapter } from '../../src/CustomGatewayAdapter'
import { mockAdapterContext } from '../../__mocks__/AdapterContext'
import { mockLoggerFactory } from '../../__mocks__/LoggerFactory'
const createAdapter = (context = {}, logger = mockLoggerFactory()) =>
  new CustomGatewayAdapter(context, logger)

describe('Kibo Payment Gateway - Custom Gateway Adapter', () => {
  it('should create custom gateway adapter', () => {
    const adapter = createAdapter(mockAdapterContext)
    expect(adapter.context).toEqual(mockAdapterContext)
  })

  it('should call custom gateway adapter method - authorize', async () => {
    const mockRequest = {}
    const mockResponse = {}
    const adapter = createAdapter(mockAdapterContext)
    await expect(adapter.authorize(mockRequest)).rejects.toThrow()
    //const ret = await adapter.authorize(mockRequest)
    //expect(ret).not.toBeNull()
    //add more assertions
  })

  it('should call custom gateway adapter method - authorizeWithToken', async () => {
    const mockRequest = {}
    const mockResponse = {}

    const adapter = createAdapter(mockAdapterContext)
    await expect(adapter.authorizeWithToken(mockRequest)).rejects.toThrow()
  })

  it('should call custom gateway adapter method - capture', async () => {
    const mockRequest = {}
    const mockResponse = {}

    const adapter = createAdapter(mockAdapterContext)
    await expect(adapter.capture(mockRequest)).rejects.toThrow()
  })

  it('should call custom gateway adapter method - credit', async () => {
    const mockRequest = {}
    const mockResponse = {}

    const adapter = createAdapter(mockAdapterContext)
    await expect(adapter.credit(mockRequest)).rejects.toThrow()
  })

  it('should call custom gateway adapter method - void', async () => {
    const mockRequest = {}
    const mockResponse = {}

    const adapter = createAdapter(mockAdapterContext)
    await expect(adapter.void(mockRequest)).rejects.toThrow()
  })

  it('should call custom gateway adapter method - authorizeAndCapture', async () => {
    const mockRequest = {}
    const mockResponse = {}

    const adapter = createAdapter(mockAdapterContext)
    await expect(adapter.authorizeAndCapture(mockRequest)).rejects.toThrow()
  })

  it('should call custom gateway adapter method - authorizeAndCaptureWithToken', async () => {
    const mockRequest = {}
    const mockResponse = {}

    const adapter = createAdapter(mockAdapterContext)
    await expect(adapter.authorizeAndCaptureWithToken(mockRequest)).rejects.toThrow()
  })

  it('should call custom gateway adapter method - createGiftCard', async () => {
    const mockRequest = {}
    const mockResponse = {}

    const adapter = createAdapter(mockAdapterContext)
    await expect(adapter.createGiftCard(mockRequest)).rejects.toThrow()
  })

  it('should call custom gateway adapter method - getBalance', async () => {
    const mockRequest = {}
    const mockResponse = {}

    const adapter = createAdapter(mockAdapterContext)
    await expect(adapter.getBalance(mockRequest)).rejects.toThrow()
  })
})
