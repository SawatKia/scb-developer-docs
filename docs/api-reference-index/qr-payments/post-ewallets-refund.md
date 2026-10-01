---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/post-ewallets-refund.html"
source_route: "#/documents/api-reference-index/qr-payments/post-ewallets-refund.html"
source: SCB Developer Portal
content_hash: a8cc5c0a294e0839de81066949318c04fa9481b30f813a928b67d79e7fd64952
---

# 

POST

/​v1/​payment/​ewallets/​refund

This endpoint supports the cancellation of a transaction created in WeChatPay (C Scan B).

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/refund`  

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
• “W”: WeChatPay |
| companyId | String | Not Support | Required | Company ID  
Length: Up to 5  
**For sandbox**: It must be number \[0-9\] |
| terminalId | String | Not Support | Required | Terminal ID |
| outTradeNo | String | Not Support | Required | Unique Merchant Transaction Reference Number  
Length: Up to 50  
**For sandbox**: It must start with 'SCB' |
| totalFee | String | Not Support | Required | Amount of transaction with the length up to 10 characters including "." e.g. 100, 100.00 |

## Example Request

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/refund \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: c5dc8a34-63a7-4ce1-80d1-cf8cafd268c3' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "W",
    "companyId": "001",
    "terminalId": "12345678",
    "outTradeNo": "TRANSACTIONREFERENCE",
    "totalFee": "5.00"
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

### Alipay+/WeChatPay

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
