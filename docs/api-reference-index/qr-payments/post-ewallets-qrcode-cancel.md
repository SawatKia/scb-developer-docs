---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/post-ewallets-qrcode-cancel.html"
source_route: "#/documents/api-reference-index/qr-payments/post-ewallets-qrcode-cancel.html"
source: SCB Developer Portal
content_hash: 9d9d738ec420784e8d01fbe1dabaa50ee808f00f729d289a3330e3a510e60f3c
---

# 

POST

/​v1/​payment/​ewallets/​qrcode/​cancel

This endpoint supports the cancellation of a QR transaction created in WeChat. This API is used when a merchant wants to cancel the QR before it is paid. If the QR is paid, use [Refund API](post-ewallets-refund.html) to reverse the payment.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/qrcode/cancel`  

## Request Header

| Name | Type | Alipay+ | WeChatPay | Description |
| :-- | :-- | :-- | :-- | :-- |
| content-type | String | Not Support | Required | Content type of request payload  
**Value:  
\- application/json** |
| resourceOwnerId | String | Not Support | Required | The system identifier, use the value of apikey |
| requestUId | String | Not Support | Required | A unique identifier the client can generate to track the current request call |
| authorization | String | Not Support | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Not Support | Optional | The language of the content in the request payload  
**Values:  
\- EN (Default)  
\- TH** |

## Request Body

| Name | Type | Alipay+ | WeChatPay | Description |
| :-- | :-- | :-: | :-: | :-- |
| tranType | String | Not Support | W | Type of QR Code  
“W”: WeChatPay |
| companyId | String | Not Support | Required | Company ID  
Length: Up to 5  
**For sandbox**: It must be number \[0-9\] |
| terminalId | String | Not Support | Required | Terminal ID |
| outTradeNo | String | Not Support | Required | Unique Merchant Transaction Reference Number  
Length: Up to 50  
**For sandbox**: It must start with 'SCB' |

## Example Request

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/qrcode/cancel \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: 78f9de00-8e28-4a5e-9ae7-edd5093d94cb' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "W",
    "companyId": "001",
    "terminalId": "12345678",
    "outTradeNo": "TRANSACTIONREFERENCE"
  }'
```

[Download Postman Collection](payment-ewallets-qrcode-cancel.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |

## Example Response

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
