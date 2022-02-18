import host from '@kibocommerce/kibo-paymentgateway-hosting'
import { CustomAdapterFactory } from '../../src/CustomAdapterFactory'
import { CustomGatewayAdapter } from '../../src/CustomGatewayAdapter'
import request from 'supertest'

describe('Kibo Payment Gateway - Hosted Adapter ', () => {
  const factory = new CustomAdapterFactory()
  const server = host(factory)

  it('should POST to /authorize gateway host', async () => {
    const mockAuthorize = jest
      .spyOn(CustomGatewayAdapter.prototype, 'authorize')
      .mockImplementation(async () => ({ action: 'authorize' } as any))

    const response = await request(server).post('/authorize').set('Accept', 'application/json')

    expect(response.body).toEqual({ action: 'authorize' })
    expect(mockAuthorize).toBeCalled()
  })

  it('should POST to /authorizeWithToken gateway host', async () => {
    const mockAuthorizeWithToken = jest
      .spyOn(CustomGatewayAdapter.prototype, 'authorizeWithToken')
      .mockImplementation(async () => ({ action: 'authorizeWithToken' } as any))

    const response = await request(server)
      .post('/authorizeWithToken')
      .set('Accept', 'application/json')

    expect(response.body).toEqual({ action: 'authorizeWithToken' })
    expect(mockAuthorizeWithToken).toBeCalled()
  })

  it('should POST to /credit gateway host', async () => {
    const mockCredit = jest
      .spyOn(CustomGatewayAdapter.prototype, 'credit')
      .mockImplementation(async () => ({ action: 'credit' } as any))

    const response = await request(server).post('/credit').set('Accept', 'application/json')

    expect(response.body).toEqual({ action: 'credit' })
    expect(mockCredit).toBeCalled()
  })

  it('should POST to /void gateway host', async () => {
    const mockVoid = jest
      .spyOn(CustomGatewayAdapter.prototype, 'void')
      .mockImplementation(async () => ({ action: 'void' } as any))

    const response = await request(server).post('/void').set('Accept', 'application/json')

    expect(response.body).toEqual({ action: 'void' })
    expect(mockVoid).toBeCalled()
  })

  it('should POST to /capture gateway host', async () => {
    const mockCapture = jest
      .spyOn(CustomGatewayAdapter.prototype, 'capture')
      .mockImplementation(async () => ({ action: 'capture' } as any))

    const response = await request(server).post('/capture').set('Accept', 'application/json')

    expect(response.body).toEqual({ action: 'capture' })
    expect(mockCapture).toBeCalled()
  })

  it('should POST to /authorizeAndCapture gateway host', async () => {
    const mockAuthorizeAndCapture = jest
      .spyOn(CustomGatewayAdapter.prototype, 'authorizeAndCapture')
      .mockImplementation(async () => ({ action: 'authorizeAndCapture' } as any))

    const response = await request(server)
      .post('/authorizeAndCapture')
      .set('Accept', 'application/json')

    expect(response.body).toEqual({ action: 'authorizeAndCapture' })
    expect(mockAuthorizeAndCapture).toBeCalled()
  })

  it('should POST to /authorizeAndCaptureWithToken gateway host', async () => {
    const mockAuthorizeAndCaptureWithToken = jest
      .spyOn(CustomGatewayAdapter.prototype, 'authorizeAndCaptureWithToken')
      .mockImplementation(async () => ({ action: 'authorizeAndCaptureWithToken' } as any))

    const response = await request(server)
      .post('/authorizeAndCaptureWithToken')
      .set('Accept', 'application/json')

    expect(response.body).toEqual({ action: 'authorizeAndCaptureWithToken' })
    expect(mockAuthorizeAndCaptureWithToken).toBeCalled()
  })

  it('should POST to /createGiftCard gateway host', async () => {
    const mockCreateGiftCard = jest
      .spyOn(CustomGatewayAdapter.prototype, 'createGiftCard')
      .mockImplementation(async () => ({ action: 'createGiftCard' } as any))

    const response = await request(server).post('/createGiftCard').set('Accept', 'application/json')

    expect(response.body).toEqual({ action: 'createGiftCard' })
    expect(mockCreateGiftCard).toBeCalled()
  })

  it('should POST to /getBalance gateway host', async () => {
    const mockGetBalance = jest
      .spyOn(CustomGatewayAdapter.prototype, 'getBalance')
      .mockImplementation(async () => ({ action: 'getBalance' } as any))

    const response = await request(server).post('/getBalance').set('Accept', 'application/json')

    expect(response.body).toEqual({ action: 'getBalance' })
    expect(mockGetBalance).toBeCalled()
  })
})
