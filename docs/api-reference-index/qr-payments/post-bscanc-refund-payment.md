---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/post-bscanc-refund-payment.html"
source_route: "#/documents/api-reference-index/qr-payments/post-bscanc-refund-payment.html"
source: SCB Developer Portal
content_hash: 926747c32d48b48fad1f15ceb6aab2fc6fe9a65650bc8ed27bd3e55fd559b420
---

# 

POST

/​v1/​payment/​merchant/​rtp/​refund

This endpoint support the B Scan C Refund API The refund API can be use within 23:00 of original transaction date and only full amount refund is supported.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/merchant/rtp/refund`  

## Request Header

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| content-type | String | Required | Content type of request payload  
**Value:  
\- application/json** |
| authorization | String | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| resourceOwnerId | String | Required | The system identifier, use the value of apikey |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call |
| accept-language | String | Optional | The language of the content in the request payload  
**Values:  
\- EN (Default)  
\- TH** |

## Request Body

| Name | Type | Required | Description |
| :-- | :-: | :-: | :-- |
| partnerTransactionID | String | Required | Unique Transaction ID from a |

Example Request

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/merchant/rtp/refund \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer 30915739-27ba-4d6d-acb6-6902fc8c49d7' \
  -H 'resourceOwnerID: 8f26823c-ad30-42ef-a9fb-9252b35bd1fe' \
  -H 'requestUID: e80f5b1e-5a2e-4811-8160-3b3aa543c18c' \
  -H 'accept-language: EN' \
  -d '{
    "partnerTransactionId" : "102376737772201H819JM9Z1JI22I90918F"
}'
```

[Download Postman Collection](payment-thai-qr-bscanc.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | partnerTransactionId | String | Partner Transaction ID |
|  | transactionId | String | SCB Transaction ID of original Payment Transaction |
|  | refundTransactionDateTime | String | Date Time of refund Transaction in ISO format  
**Format:** YYYY-MM-DDThh:mm:ss.sss+hh:mm  
Example: 2019-06-01T09:00:00.000+07:00 |

Example Response

```json
{ 
    "status":{ 
        "code":1000,
        "description":"Success"
    },
    "data":{ 
        "refundTransactionDateTime":"2019-06-01T09:00:00.000+07:00",
        "transactionId":"67bb8b8b-e205-440d-8a3a-f3a1b1668552",
        "partnerTransactionId":"102376737772201H819JM9Z1JI22I90918F"
    }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
