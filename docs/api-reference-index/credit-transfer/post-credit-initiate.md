---
source_url: "https://developer.scb/#/documents/api-reference-index/credit-transfer/post-credit-initiate.html"
source_route: "#/documents/api-reference-index/credit-transfer/post-credit-initiate.html"
source: SCB Developer Portal
content_hash: 8cca2cd73fa07f0864089e3f1a70bcbb6fe473d1e36ba14dc31df1b49de41e51
---

# 

POST

/​v1/​payment/​transfer/​fcd/​credit/​initiate

This endpoint for verify credit transfer transactions THB and FCD

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/transfer/fcd/credit/initiate`  

## Request Header

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| content-type | String | Required | Content type of request payload  
**Required:** application/json |
| authorization | String | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Optional | The language of the content in the request payload  
**Possible Values:**  
\- en (Default)  
\- th |
| resourceOwnerId | String | Required | The hash value of the userid, or your application id value |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call  
**Remark**: requestUId is random alphanumeric and length is 32. |

## Request Body

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| channelDateTime | String (29) | Required | Initiate Date Time  
**Format:** YYYY-MM-DD'T'hh:mm:ss.sss+hh:mm |
| partnerTransactionID | String (25) | Required | Unique ID used for reference between partners and bank. Displayed in the report |
| corporateId | String (35) | Required | Corporate ID |
| objectiveCode | String (6) | Conditional | Transaction objective code  
**Possible values:** 318245  
**Required if:** tranAmount.currency is not THB (for BOT report) |
| payer | Object | Required | Payer Information |
| payer.taxId | String (13) | Required | Payer Tax ID |
| payer.statementDescription | String (40) | Optional | Payer statement description |
| payer.accountInfo | Object | Required | Payer account |
| payer.accountInfo.accountNo | String (34) | Required | Payer account number (debit account)  
**Remark:**  
\- THB: 10 digits  
\- FCD: 13 digits |
| payer.accountInfo.bankCode | String (3) | Required | Payer bank code |
| payee | Object | Required | Payee information |
| payee.taxId | String (13) | Optional | Payee Tax ID |
| payee.statementDescription | String (40) | Optional | Payee statement description |
| payee.proxy | Object | Conditional | Payee Proxy  
**Required for:** Transferring money via PromptPay (THB Only) |
| payee.proxy.proxyType | String (30) | Required | Proxy Type  
**Possible values:**  
\- CID - Citizen ID |
| payee.proxy.proxyId | String (20) | Required | Payee Proxy ID |
| payee.accountInfo | Object | Conditional | Payee account  
**Required for:** Transferring money via Account No. |
| payee.accountInfo.accountNo | String (34) | Required | Payee account number (credit account) |
| payee.accountInfo.bankCode | String (3) | Required | Payee bank code |
| tranAmount | Object | Required | Transaction Amount |
| tranAmount.amount | Decimal (15,2) | Required | Transaction Amount  
**Remark:** Integer 13 digits, fraction 2 digits |
| tranAmount.currency | String (3) | Required | Transaction amount currency. Both Thai Baht and foreign currencies are accepted |

Example Request: THB

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/transfer/fcd/credit/initiate \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'accept-language: en' \
  -H 'resourceOwnerId: <Your API Key>' \
  -H 'requestUId: <Unique Request ID>' \
  -d '{
   "channelDateTime":"2017-03-13T09:00:00.000+07:00",
   "partnerTransactionID":"XXXX201902271321300000001",
   "corporateId":"abcd001",
   "payer":{
      "accountInfo":{
         "accountNo":"1234567890",
         "bankCode":"014"
      }
   },
   "payee":{
      "accountInfo":{
         "accountNo":"9876543210",
         "bankCode":"014"
      }
   },
   "tranAmount":{
      "amount":2000.00,
      "currency":"THB"
   }
}'
```

[Download Postman Collection](post-credit-initiate-thb.json)

Example Request: USD

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/transfer/fcd/credit/initiate \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'accept-language: en' \
  -H 'resourceOwnerId: <Your API Key>' \
  -H 'requestUId: <Unique Request ID>' \
  -d '{
   "channelDateTime":"2017-03-13T09:00:00.000+07:00",
   "partnerTransactionID":"XXXX201902271330450000002",
   "corporateId":"abcd001",
   "objectiveCode":"318245",
   "payer":{
      "accountInfo":{
         "accountNo":"2345678901840",
         "bankCode":"014"
      }
   },
   "payee":{
      "accountInfo":{
         "accountNo":"8765432109840",
         "bankCode":"014"
      }
   },
   "tranAmount":{
      "amount":2000.00,
      "currency":"USD"
   }
  }'
```

[Download Postman Collection](post-credit-initiate-usd.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | A business status code of request |
|  | description | String | A business status message of request |
| data |  |  |  |
|  | channelDateTime | String | Initiate date time  
**Format**: YYYY-MM-DD'T'hh:mm:ss.sss+hh:mm |
|  | tokenizerId | String | Tokenizer ID used for transaction reference between API initiate, confirm and inquiry. |

Example Response

```json
{
  "status":{
    "code":1000,
    "description":"Success"
  },
  "data":{
    "channelDateTime":"2017-03-13T09:01:00.000+07:00",
    "tokenizerId":"ABCDXXXX201902271330450000001"
  }
}
```

## Response Codes

| HTTP Status Code | Business Code | Description |
| :-- | :-- | :-- |
| 200 | 1000 | Success |
| 400 | 1102 | Invalid accept-language entered |
| 400 | 9100 | Required standard headers |
| 401 | 9100 | Authorization credentials required |
| 401 | 9500 | Invalid authorization credentials |
| 401 | 9595 | Failed SSL signature verification |
| 401 | 9591 | 2-Way SSL host is required for this endpoint |
| 403 | 9500 | Invalid authorization credentials |
| 429 | 9900 | Max request has reached rate limited |
| 500 | 9900 | Threat has been detected |
| 500 | \- | Wrong http method requested on endpoint |
| 503 | 9990 | Service not available, or currently under maintenance |
| 503 | 9900 | Server is currently unavailable because traffic overload or it is down for maintenance |
| 503 | 9900 | System maintenance in progress. We will be back shortly. |
| 504 | 9900 | API Request Timeout |
| 4XX | 8101 | Invalid response from downstream service |
| 5XX | 8101 | Invalid response from downstream service |

See list of [Generic Response Codes](../references/generic-response-codes.html).
