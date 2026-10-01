---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/post-ewallets-inquire.html"
source_route: "#/documents/api-reference-index/qr-payments/post-ewallets-inquire.html"
source: SCB Developer Portal
content_hash: db09dffd10124dc0e8bed60e4f14ba205f0da58ebe51facb03fc5c21bb62299f
---

# 

POST

/​v1/​payment/​ewallets/​inquire

This endpoint supports the inquiry of a transaction made either in Alipay+ or WeChatPay.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/inquire`  

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

### Alipay

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/inquire \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: c5dc8a34-63a7-4ce1-80d1-cf8cafd268c3' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "X",
    "companyId": "001",
    "terminalId": "77772430",
    "outTradeNo": "TRANSACTIONREFERENCE8"
  }'
```

### Alipay+

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/inquire \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: c5dc8a34-63a7-4ce1-80d1-cf8cafd268c3' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "X",
    "companyId": "001",
    "terminalId": "77772430",
    "outTradeNo": "TRANSACTIONREFERENCE8"
  }'
```

### WeChatPay

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/inquire \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: c5dc8a34-63a7-4ce1-80d1-cf8cafd268c3' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "W",
    "companyId": "001",
    "terminalId": "12345678",
    "outTradeNo": "TRANSACTIONREFERENCE"
  }'
```

[Download Postman Collection](payment-ewallets-inquire.json)

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
    "transactionId": "4200000122201806141306164313",
    "amount": "1.50",
    "mid": "1493315672",
    "ref2": "",
    "ref1": "",
    "tradeState": "SUCCESS",
    "nonceStr": "xEK4jAOuwNqbkdsc",
    "tid": "T2000001",
    "exchangeRate": "0.1993837737",
    "buyerLoginId": "0819841761",
    "timeEnd": "20180614131556",
    "cnyAmount": "0.25",
    "masterTid": "T2000001",
    "ref3": "",
    "addressLine1": "GHL THAILAND",
    "addressLine2": "DEMO",
    "buyerUserId": null,
    "addressLine3": "AUGUST 6",
    "masterMid": "20180806"
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
    "no": "0",
    "secondary_merchant_industry": "5812",
    "mid": "0912172",
    "ref2": "",
    "ref1": "",
    "pspname": "Kakao Pay",
    "tid": "77772430",
    "cnyAmount": "5.0",
    "secondary_merchant_id": "0912172",
    "paymentMethod2": null,
    "buyerLoginId": "2102209000002588308E9",
    "exchangeRate": "0.0",
    "masterTid": "77772430",
    "paymentMethod3": null,
    "addressLine1": "SCB Merchant Test  WeChat Alipay",
    "addressLine2": "",
    "currency": "THB",
    "addressLine3": "BANGKOK",
    "masterMid": "0912172",
    "timeEnd": "20241001172432",
    "amount": "5.0",
    "nonceStr": "TRANSACTIONREFERENCE8",
    "transactionId": "20241001190741010008F0006941179",
    "tradeState": "SUCCESS",
    "time_tran": "20241001172200",
    "out_trade_no": null,
    "ref3": "",
    "secondary_merchant_name": "SCB Merchant Test - WeChat/Alipay 9",
    "paymentMethod": null,
    "buyerUserId": ""
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
    "transactionId": "4200000122201806141306164313",
    "amount": "1.50",
    "mid": "1493315672",
    "ref2": "",
    "ref1": "",
    "tradeState": "SUCCESS",
    "nonceStr": "xEK4jAOuwNqbkdsc",
    "tid": "T2000001",
    "exchangeRate": "0.1993837737",
    "buyerLoginId": "0819841761",
    "timeEnd": "20180614131556",
    "cnyAmount": "0.25",
    "masterTid": "T2000001",
    "ref3": "",
    "addressLine1": "GHL THAILAND",
    "addressLine2": "DEMO",
    "buyerUserId": null,
    "addressLine3": "AUGUST 6",
    "masterMid": "20180806"
  }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
