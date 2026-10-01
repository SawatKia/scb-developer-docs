---
source_url: "https://developer.scb/#/documents/api-reference-index/credit-transfer/post-credit-confirm.html"
source_route: "#/documents/api-reference-index/credit-transfer/post-credit-confirm.html"
source: SCB Developer Portal
content_hash: ae0dc395f04bdac8245734696b72cb32fe30116226433390c93fedbd1e850982
---

# 

POST

/​v1/​payment/​transfer/​fcd/​credit/​confirm

This endpoint for confirm credit transfer transactions THB and FCD

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/transfer/fcd/credit/confirm`  

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
| channelDateTime | String (29) | Required | Confirm Date Time  
**Format:** YYYY-MM-DD'T'hh:mm:ss.sss+hh:mm |
| tokenizerId | String (35) | Required | Tokenizer ID used for transaction reference between API initiate, confirm and inquiry. |

Example Request

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/transfer/fcd/credit/confirm \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'accept-language: en' \
  -H 'resourceOwnerId: <Your API Key>' \
  -H 'requestUId: <Unique Request ID>' \
  -d '{
      "channelDateTime": "2017-03-13T09:01:00.000+07:00",
      "tokenizerId": "ABCDXXXX201902271330450000001"
  }'
```

[Download Postman Collection](post-credit-confirm.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | A business status code of request |
|  | description | String | A business status message of request |
| data |  |  |  |
|  | channelDateTime | String | Confirm Date Time  
**Format**: YYYY-MM-DD'T'hh:mm:ss.sss+hh:mm |
|  | tokenizerId | String | Unique Tokenizer ID |

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
