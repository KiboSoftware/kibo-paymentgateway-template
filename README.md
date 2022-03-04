# Node.js Payment Extensibility Template

This repo is designed to be the starting point for your Kibo Payment Gateway Adapter.

```
.
├── .github/
│   └── worflows
├── .husky
├── __mocks__
├── __tests__                     <-- add/update tests here
├── settings/
│   ├── production.json           <-- environmental configuration here
│   └── sandbox.json
└── src/
    ├── types
    ├── config.ts
    ├── CustomAdapterFactory.ts
    └── CustomGatewayAdapter.ts    <--Implement business logic here
```

### Implement the PaymentGatwayAdapter interface

```js
 async authorize(request: GatewayAuthorizationRequest):
    Promise<GatewayAuthorizeResponse> {

    // grab the admin settings / credentials from the context
    const merchantId = this.context.settings?.find(x=> x.key === 'merchantId')?.value;
    const merchantSecret = this.context.settings?.find(x=> x.key === 'secret')?.value;

    this.logger.info('info message');
    //call the underlying extrenal gateway
    const gatewayResonse = await callRealGateway(
      merchantId,
      merchantSecret,
      request?.card ,
      request.amount ,
      request.shopper?.contact?.lastname);
    //transform and return the GatewayAuthorizeResponse
    return {
      authCode: 'AUTHORIZED',
      responseCode: 'Success',
      responseData:[
        {
          key:"somedata",
          value:"somevalue"
        }]
      }
  }
  async authorizeWithToken(
    request: GatewayAuthorizationRequest
  ): Promise<GatewayAuthorizeResponse> {
    ...
  }

```

## The following table describes the success/failure codes:

| Code     | Meaning                                                                                                                                                                                          |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Success  | Returned when a valid request is successfully processed. Note: Your payment gateway may have multiple success codes that will need to be mapped                                                  |
| Timeout  | Returned when a request times out before it is finished processing.                                                                                                                              |
| Reject   | Sent when a valid transaction is processed but gets rejected. For example, when a credit card payment is successfully processed but the credit card has insufficient funds to cover the payment. |
| Unauth   | Returned when your request does not have valid authorization credentials.                                                                                                                        |
| Error    | Returned if you submit an invalid request.                                                                                                                                                       |
| NotFound | Returned when the gateway cannot be found.                                                                                                                                                       |
