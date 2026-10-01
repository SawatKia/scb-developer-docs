---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/post-ewallets-qrcode-create.html"
source_route: "#/documents/api-reference-index/qr-payments/post-ewallets-qrcode-create.html"
source: SCB Developer Portal
content_hash: ec2b2ff61875a1a90a1893a7628a903b9d722a0926560972dd18874d46b65a40
---

# 

POST

/​v1/​payment/​ewallets/​qrcode/​create

This endpoint supports the QR code generation of Alipay+ and WeChatPay. There are 2 use cases.  

1.  Generate Alipay+ QR code  
    
2.  Generate WeChatPay QR code

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/qrcode/create`  

## Request Header

| Name | Type | Alipay+ | WeChatPay | Description |
| :-- | :-- | :-- | :-- | :-- |
| content-type | String | Required | Required | Content type of request payload  
**Value:  
\- application/json** |
| resourceOwnerId | String | Required | Required | The system identifier, use the value of apikey |
| requestUId | String | Required | Required | A unique identifier the client can generate to track the current request call |
| authorization | String | Required | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Optional | Optional | The language of the content in the response payload  
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
Length: Up to 20  
**For sandbox**: It must start with 'SCB' |
| totalFee | String | Required | Required | Amount of transaction with the length up to 10 characters including "." e.g. 100, 100.00 |

## Example Request

### Alipay

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/qrcode/create \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: d91ccd06-3ebd-4fda-921b-1581e1176fa4' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "A",
    "companyId": "001",
    "terminalId": "12345678",
    "outTradeNo": "TRANSACTIONREFERENCE",
    "totalFee": "5.00"
  }'
```

### Alipay+

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/qrcode/create \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: d91ccd06-3ebd-4fda-921b-1581e1176fa4' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "X",
    "companyId": "001",
    "terminalId": "77772430",
    "outTradeNo": "TRANSACTIONREFERENCE8",
    "totalFee": "5.00"
  }'
```

### WeChatPay

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/ewallets/qrcode/create \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: d91ccd06-3ebd-4fda-921b-1581e1176fa4' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "tranType": "W",
    "companyId": "001",
    "terminalId": "12345678",
    "outTradeNo": "TRANSACTIONREFERENCE",
    "totalFee": "5.00"
  }'
```

[Download Postman Collection](payment-ewallets-qrcode-create.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | codeUrl | String | QR Code URL  
Alipay+ : Load the URL provided to get the QR Code  
WeChatPay : Create QR Code with the provided URL |
|  | prepayId | String | Prepay ID (Not Use) |

## Example Response

### Alipay

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  },
  "data": {
    "codeUrl": "https://mobilecodec.alipay.com/show.htm?code=bax03615bwrntljsu8xs40c3&picSize=M",
    "prepayId": "wx14135131122309
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
    "codeUrl": "00020101021239810016A90000000000000001030000203CsB0336281666040093zx8R7RL5L48Mii5AYqRv3TG20503006530376454045.005802TH5935SCB Merchant Test - WeChat/Alipay 96007BANGKOK621207087777243063046D34",
    "out_trade_no": "TRANSACTIONREFERENCE8",
    "profile": null,
    "qrid": "20241001190741010008F0006941179",
    "prepayId": "TRANSACTIONREFERENCE8"
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
    "codeUrl": "weixin://wxpay/bizpayurl?pr=3UnEc2q",
    "prepayId": "wx14135131122309"
  }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
