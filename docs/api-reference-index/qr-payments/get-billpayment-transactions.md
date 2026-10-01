---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/get-billpayment-transactions.html"
source_route: "#/documents/api-reference-index/qr-payments/get-billpayment-transactions.html"
source: SCB Developer Portal
content_hash: 61b5d3afea1f0cb2f97fd071e45b02b460de0c571f52f563dfdfeca8c362a059
---

# 

GET

/​v1/​payment/​billpayment/​transactions/​{transRef}?{param}={value}

This endpoint supports the slip verification of a QR 30 type payment.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/billpayment/transactions/{transRef}?{param}={value}`  

## Request Header

| Name | Type | QR 30 | Description |
| :-- | :-- | :-- | :-- |
| resourceOwnerId | String | Required | The system identifier, use the value of apikey |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call |
| authorization | String | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Optional | The language of the content in the response payload  
**Values:  
\- EN (Default)  
\- TH** |

## Query String Parameter

| Name | Type | QR 30 | Description |
| :-- | :-- | :-- | :-- |
| transRef | String | Required | Transaction Slip ID |
| sendingBank | String | Required | Use 014 for SCB |

## Example Request

```javascript
curl -X GET \
  'https://api-sandbox.partners.scb/partners/sandbox/v1/payment/billpayment/transactions/{transRef}?sendingBank=014' \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUID: 46577477-d5cf-4f46-8cb4-7508415ad838' \
  -H 'resourceOwnerID: <Your API Key>'
```

[Download Postman Collection](payment-thai-qr.json)

## Response

### Main

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | transRef | String | Transaction Slip ID |
|  | sendingBank | String | Sender Bank Code |
|  | receivingBank | String | Receiving Bank Code |
|  | transDate | String | Transaction Date |
|  | transTime | String | Transaction Time |
|  | sender | String | See Sender |
|  | receiver | String | See Receiver |
|  | amount | String | Transaction Amount |
|  | paidLocalAmount | String | Local Amount |
|  | paidLocalCurrency | String | Local Currency |
|  | countryCode | String | Country Code |
|  | ref1 | String | Reference 1 |
|  | ref2 | String | Reference 2 |
|  | ref3 | String | Reference 3 |

### Sender

| Name | Type | Description |
| :-- | :-- | :-- |
| displayName | String | Display Name of payer |
| name | String | Name of payer |
| proxy | String | See Proxy |
| account | String | See Account |

### Receiver

| Name | Type | Description |
| :-- | :-- | :-- |
| displayName | String | Display Name of payee |
| name | String | Name of payee |
| proxy | String | See Proxy |
| account | String | See Account |

### Proxy

| Name | Type | Description |
| :-- | :-- | :-- |
| type | String | BILLERID |
| value | String | Biller ID |

### Account

| Name | Type | Description |
| :-- | :-- | :-- |
| type | String | BANKAC |
| value | String | Account Number |

## Example Response

```json
{
  "status": {
    "code": 1000,
    "description": "Success"
  },
  "data": {
    "transRef": "201904227kAylzNUdnJ1z0w",
    "sendingBank": "014",
    "receivingBank": "014",
    "transDate": "20190422",
    "transTime": "14:04:35",
    "sender": {
      "displayName": "Sandbox customer",
      "name": "Sandbox customer",
      "proxy": {
        "type": "MSISDN",
        "value": "0812345678"
      },
      "account": {
        "type": "BANKAC",
        "value": "1234567890"
      }
    },
    "receiver": {
      "displayName": "Sandbox Shop",
      "name": "Sandbox Shop",
      "proxy": {
        "type": "BILLERID",
        "value": "311040039475171"
      },
      "account": {
        "type": "BANKAC",
        "value": "0987654321"
      }
    },
    "amount": "500",
    "paidLocalAmount": "500",
    "paidLocalCurrency": "764",
    "countryCode": "TH",
    "ref1": "12345678",
    "ref2": "Test",
    "ref3": "1234"
  }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
