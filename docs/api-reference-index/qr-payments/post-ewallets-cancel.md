---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/post-ewallets-cancel.html"
source_route: "#/documents/api-reference-index/qr-payments/post-ewallets-cancel.html"
source: SCB Developer Portal
content_hash: 93aeb09ad72b434dddfc92ac85c410cc45447993a7d165b218f7e57f3ff88050
---

# 

POST

/​v1/​payment/​ewallets/​cancel

This endpoint supports the cancellation of a transaction created in Alipay+ (C Scan B and B Scan C) and WeChatPay (B Scan C).

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/cancel`  

## Request Header

| Name | Type | Alipay+ | WeChatPay | Description |
| :-- | :-- | :-- | :-- | :-- |
| content-type | String | Required | Required | Content type of request payload  
**Value:  
\- application/json** |
| resourceOwnerId | String | Required | Required | The system identifier, use the value of apikey |
| requestUId | String | Required | Required | A unique identifier the client can generate to track the current request call |
| authorization | String | Required | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Optional | Optional | The language of the content in the request payload  
**Values:  
\- EN (Default)  
\- TH** |

## Request Body

| Name | Type | Alipay+ | WeChatPay | Description |
| :-- | :-- | :-: | :-: | :-- |
| tranType | String | A or X | W | Type of QR Code  
• “A”: Alipay+ for image path  
• “X”: Alipay+ for raw data  
• “W”: WeChatPay |
| companyId | String | Required | Required | Company ID  
Length: Up to 5  
**For sandbox**: It must be number \[0-9\] |
| terminalId | String | Required | Required | Terminal ID |
| outTradeNo | String | Required | Required | Unique Merchant Transaction Reference Number  
Length: Up to 50  
**For sandbox**: It must start with 'SCB' |

## Example Request

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/cancel \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: ea99ad1d-2765-4105-8d0d-0d12028de2c3' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "<Alipay+/WeChatPay Flag>",
    "companyId": "<Your Company ID>",
    "terminalId": "<Your Terminal ID>",
    "outTradeNo": "<Your Unique Transaction Reference Number>"
  }'
```

[Download Postman Collection](payment-ewallets-cancel-transaction.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | details | String | Detail Response from Source System |
|  | refundId | String | Refund ID |

## Example Response

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  },
  "data": {
    "details": "OK",
    "refundId": "1234123512363462345634"
  }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
