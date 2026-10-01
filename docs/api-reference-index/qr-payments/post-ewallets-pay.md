---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/post-ewallets-pay.html"
source_route: "#/documents/api-reference-index/qr-payments/post-ewallets-pay.html"
source: SCB Developer Portal
content_hash: 27f2b0cb550128c586f4b2b27c93d99ab03725fdae9814b3b6b7abbcc777f6bd
---

# 

POST

/​v1/​payment/​ewallets/​pay

This endpoint supports QR code generation from the merchant end of Alipay+ and WeChatPay for consumers to scan and pay (B scan C).

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/pay`  

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
Length: Up to 50 |
| totalFee | String | Required | Required | Amount of transaction with the length up to 10 characters including "." e.g. 100, 100.00 |
| buyerIdentityCode | String | Required | Required | Buyer Identity Code.  
The code can be retrieve by reading Customer QR Code on Alipay+ or WeChatPay Application |

## Example Request

### Alipay

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/pay \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: 57128d15-31e8-42a1-9f43-22296dcf8388' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "A",
    "companyId": "001",
    "terminalId": "12345678",
    "outTradeNo": "TRANSACTIONREFERENCE",
    "totalFee": "5.00",
    "buyerIdentityCode" : "1234567890"
  }'
```

### Alipay+

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/pay \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: 57128d15-31e8-42a1-9f43-22296dcf8388' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "X",
    "companyId": "001",
    "terminalId": "77772430",
    "outTradeNo": "TRANSACTIONREFERENCE7",
    "totalFee": "5.00",
    "buyerIdentityCode" : "281666022747665939274761"
  }'
```

### WeChatPay

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/pay \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: 57128d15-31e8-42a1-9f43-22296dcf8388' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "W",
    "companyId": "001",
    "terminalId": "12345678",
    "outTradeNo": "TRANSACTIONREFERENCE",
    "totalFee": "5.00",
    "buyerIdentityCode" : "1234567890"
  }'
```

[Download Postman Collection](payment-ewallets-pay.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | transactionId | String | Transaction ID from Alipay+/WeChatPay |
|  | amount | String | Transaction Amount |
|  | mid | String | Merchant ID |
|  | tid | String | Terminal ID |
|  | tradeState | String | Transaction Status |
|  | exchangeRate | String | Exchange Rate |
|  | cnyAmount | String | Transaction Amount in Chinese Yuan |
|  | nonceStr | String | Not Use |
|  | timeEnd | String | Not Use |
|  | ref1 | String | Not Use |
|  | ref2 | String | Not Use |
|  | ref3 | String | Not Use |
|  | masterMid | String | Not Use |
|  | masterTid | String | Not Use |
|  | buyerUserId | String | Not Use |
|  | buyerLoginId | String | Not Use |
|  | addressLine1 | String | Not Use |
|  | addressLine2 | String | Not Use |
|  | addressLine3 | String | Not Use |

## Example Response

### Alipay

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  },
  "data": {
    "tradeState": "TRADE_SUCCESS",
    "exchangeRate": "0.2113837737",
    "buyerLoginId": "0819841761",
    "mid": "1493315672",
    "ref2": "",
    "ref1": "",
    "nonceStr": "LoHIHmuq35YG9wix",
    "tid": "T2000001",
    "masterTid": "T2000001",
    "ref3": "",
    "addressLine1": "GHL THAILAND",
    "addressLine2": "DEMO",
    "buyerUserId": null,
    "addressLine3": "AUGUST 6",
    "masterMid": "20180806",
    "timeEnd": "2019042211043838",
    "amount": "5.00",
    "transactionId": "61739028364",
    "cnyAmount": "23.696682464454977"
  }
}
```

### Alipay+

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  },
  "data": {
    "timeEnd": "20241001172820",
    "amount": "5.0",
    "mid": "0912172",
    "ref2": "",
    "ref1": "",
    "pspname": "TEST_WALLET",
    "transactionId": "20241001190741010008G0006935506",
    "nonceStr": "",
    "tradeState": "TRADE_SUCCESS",
    "tid": "77772430",
    "cnyAmount": "0.0",
    "buyerLoginId": "2102209000002587267G2",
    "out_trade_no": null,
    "exchangeRate": "0.0",
    "masterTid": "77772430",
    "ref3": "",
    "addressLine1": "SCB Merchant Test WeChat Alipay",
    "addressLine2": "",
    "currency": "",
    "buyerUserId": "2102209000002587267G2",
    "addressLine3": "BANGKOK",
    "masterMid": "0912172"
  }
}
```

### WeChatPay

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  },
  "data": {
    "tradeState": "USERPAYING",
    "exchangeRate": "0.2113837737",
    "buyerLoginId": "0819841761",
    "mid": "1493315672",
    "ref2": "",
    "ref1": "",
    "nonceStr": "LoHIHmuq35YG9wix",
    "tid": "T2000001",
    "masterTid": "T2000001",
    "ref3": "",
    "addressLine1": "GHL THAILAND",
    "addressLine2": "DEMO",
    "buyerUserId": null,
    "addressLine3": "AUGUST 6",
    "masterMid": "20180806",
    "timeEnd": "2019042211043838",
    "amount": "5.00",
    "transactionId": "61739028364",
    "cnyAmount": "23.696682464454977"
  }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
