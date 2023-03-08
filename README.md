# Node.js Payment Extensibility Template

## View the Walk Thru

The below walk thru takes you thru implementing an example Kibo Payment Extensibility Gateway Adapter

[![Watch the video](http://i3.ytimg.com/vi/3hTukdFwa5U/hqdefault.jpg)](https://youtu.be/3hTukdFwa5U)

## Support Docs

- [Payment Extensiblity Intro](https://kibocommerce.helpjuice.com/302040-payment-settings/33-payment-extensibility).
- [Payment Extensiblity Primer](https://kibocommerce.helpjuice.com/302040-payment-settings/33-payment-extensibility-starter-kit).

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

## VSCode Dev Container Support

You can open a development container with Visual Studio Code. This will create a container for the payment gateway as well as an ngrok tunnel that is configured to expose this gateway. You can continue to develop in VSCode as normal.

1. Install docker on development machine.
2. Install the (Dev Containers extension)[https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers] in VSCode.
3. Modify `/.devcontainer/devcontainer.json` and change the name of the service and container to one specific to the payment gateway.
4. (Optional) Modify `/.devcontainer/Dockerfile` and add any desired dependecies, change base image, etc.
5. Modify `/.devcontainer/ngrok.yml` and add your ngrok auth token. You can get this from a free account on ngrok.com.
6. Ctrl+shift+p "rebuild container and open"
7. Allow for download and build of container on first run. Subsequent times opening the container will be much faster.
8. Once container is open, navigate in a browser to localhost:4040. This will provide the URL that ngrok is tunneling the app to.
9. Add `/version` to that url to confirm that the app is responding.
10. Navigate to Dev Center in Kibo and add this ngrok url to the payment gateway capability for development.

Note: This repo does not have a package-lock.json committed. Run npm install on the local machine before opening the dev container.
