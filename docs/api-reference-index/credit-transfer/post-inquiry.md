---
source_url: "https://developer.scb/#/documents/api-reference-index/credit-transfer/post-inquiry.html"
source_route: "#/documents/api-reference-index/credit-transfer/post-inquiry.html"
source: SCB Developer Portal
content_hash: 7d3b6848b44b41c40f8fd86d401858c03b0bf1470244b8706f24c6b0bfe5efed
---

# 

POST

/​v1/​payment/​transfer/​fcd/​inquiry

This endpoint for inquiry status transfer transactions THB and FCD

-   Keep transaction history for 30 days.
-   Recommended to retry inquiry every 6 minutes.
-   Final status after 45 minutes.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/transfer/fcd/inquiry`  

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
| channelDateTime | String (29) | Required | Inquiry Date Time  
**Format:** YYYY-MM-DD'T'hh:mm:ss.sss+hh:mm |
| tokenizerId | String (35) | Required | Tokenizer ID used for transaction reference between API initiate, confirm and inquiry  
**Remark:** API Initiate, Confirm and Inquiry are the same |
| dateFrom | String (10) | Required | Transaction Date From  
**Format:** YYYY-MM-DD  
**Remark:** Date range for the search should be less than or equal to 3 days |
| dateTo | String (10) | Conditional | Transaction Date To  
**Format:** YYYY-MM-DD  
**Remark:** Date range for the search should be less than or equal to 3 days |

Example Request

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/transfer/fcd/inquiry \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'accept-language: en' \
  -H 'resourceOwnerId: <Your API Key>' \
  -H 'requestUId: <Unique Request ID>' \
  -d '{
    "channelDateTime": "2017-03-13T09:01:00.000+07:00",
    "tokenizerId": "ABCDXXXX201902271330450000001",
    "dateFrom": "2017-03-13",
    "dateTo": "2017-03-13"
  }'
```

[Download Postman Collection](post-inquiry.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | A business status code of request |
|  | description | String | A business status message of request |
| data |  |  |  |
|  | channelDateTime | String | Inquiry Date Time  
**Format**: YYYY-MM-DD'T'hh:mm:ss.sss+hh:mm |
|  | tokenizerId | String | Unique Tokenizer ID |
|  | debitStatus | String | Debit Status  
**Possible values:**  
\- Full  
\- Partial  
**Remark: Mandatory** for direct debit transaction |
|  | status | String | Transaction status  
**Possible values:**  
\- INITIATE\_COMPLETED  
\- CONFIRM\_COMPLETED  
\- CONFIRM\_FAILED  
\- CONFIRM\_PROCESSING  
\- CANCELED |
|  | code | String | Error code  
**Remark:**  
\- **Mandatory** for status "CONFIRM\_FAILED"  
\- Transaction error code from PMH:  
     - Refer to Appendix A and BUSINESS ERROR HANDLING FROM LEGACY |
|  | description | String | Error description  
**Remark:**  
\- **Mandatory** for status "CONFIRM\_FAILED"  
\- Transaction error code from PMH:  
     - Refer to Appendix A and BUSINESS ERROR HANDLING FROM LEGACY |
|  | tranAmount | Object | Transaction amount |
|  | tranAmount.amount | Decimal | Transaction amount  
**Remark:** Integer 13 digits, fraction 2 digits |
|  | tranAmount.currency | String | Transaction amount currency |
|  | confirmAmount | Object | Transaction amount  
**Remark: Mandatory** for direct debit transaction |
|  | confirmAmount.amount | Decimal | Transaction amount  
**Remark:** Integer 13 digits, fraction 2 digits |
|  | confirmAmount.currency | String | Transaction amount currency (Both Thai Baht and foreign currencies) |

Example Response

HTTP CODE: 200 Direct Credit Initiate Success

```json
{
  "status":{
    "code":1000,
    "description":"Success"
  },
  "data":{
      "channelDateTime":"2017-03-13T09:01:00.000+07:00",
      "tokenizerId":"ABCDXXXX201902271330450000001",
      "status":"INITIATE_COMPLETED",
      "tranAmount":{
         "amount":20000.00,
         "currency":"THB"
  }
}
```

HTTP CODE: 200 Direct Credit Confirm Success

```json
{
  "status":{
    "code":1000,
    "description":"Success"
  },
   "data":{
      "channelDateTime":"2017-03-13T09:01:00.000+07:00",
      "tokenizerId":"ABCDXXXX201902271330450000001",
      "status":"CONFIRM_COMPLETED",
      "tranAmount":{
         "amount":20000.00,
         "currency":"THB"
      }
   }
}
```

HTTP CODE: 200 Direct Debit Confirm Transaction Success

```json
{
   "status":{
      "code":1000,
      "description":"Success"
   },
   "data":{
      "channelDateTime":"2017-03-13T09:01:00.000+07:00",
      "tokenizerId":"ABCDXXXX201902271330450000001",
      "debitStatus":"Full",
      "status":"CONFIRM_COMPLETED",
      "tranAmount":{
         "amount":20000.00,
         "currency":"THB"
      },
      "confirmAmount":{
         "amount":20000.00,
         "currency":"THB"
      }
   }
}
```

HTTP CODE: 200 Direct Debit Confirm Transaction Failed

```json
{
   "status":{
      "code":1000,
      "description":"Success"
   },
   "data":{
      "channelDateTime":"2023-03-02T09:01:00.000+07:00",
      "tokenizerId":"ABCDXXXX201902271330450077877",
      "debitStatus":"Partial",
      "status":"CONFIRM_FAILED",
      "code":"340",
      "description":"Insufficient Funds",
      "tranAmount":{
         "amount":20000.00,
         "currency":"THB"
      },
      "confirmAmount":{
         "amount":13000.00,
         "currency":"THB"
      }
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
