---
source_url: "https://developer.scb/#/documents/api-reference-index/authentication/post-oauth-token.html"
source_route: "#/documents/api-reference-index/authentication/post-oauth-token.html"
source: SCB Developer Portal
content_hash: 359b8129a057bea14db1697156e21a7e1608341f4257ecb3a336a354384d3a9a
---

# 

POST

/​v1/​oauth/​token

This endpoint generates the access token, which is used to access any consented resource of the user on SCB Developer platform.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token`  

## Request Header

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| content-type | String | Required | Content type of request payload  
**Value:  
\- application/json** |
| resourceOwnerId | String | Required | The hash value of the userid, or related user identification value. If no resourceOwnerId available, use applicationId |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call |
| accept-language | String | Optional | The language of the content in the response payload  
**Values:  
\- EN (Default)  
\- TH** |

## Request Body

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| applicationKey | String | Required | The unique key of the application that is accessing data on the user's authority |
| applicationSecret | String | Required | The secret key associated to the partner's application |
| authCode | String | Conditional | Authorization code acquired following the user's grant of consent  
**Required if your application needs to access APIs that are user specific.** |
| state | String | Conditional | Corresponding unique state key for the current session, **support for web application only** |
| codeChallenge | String | Conditional | Code challenge secret key of the current session, **support for web application only** |

Example Request

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'requestUId: 85230887-e643-4fa4-84b2-4e56709c4ac4' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
      "applicationKey" : "<You API Key>",
      "applicationSecret" : "<Your API Secret>",
      "authCode" : "<Authorization Code>"
  }'
```

[Download Postman Collection](authentication.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | accessToken | String | Access token used to access our system in the user's authority |
|  | tokenType | String | Prefix of the token to be appended to the access token |
|  | expiresIn | Number | Amount of time until the current access token is expired (in seconds) |
|  | expiresAt | Timestamp | Timestamp (in seconds epoch) of the time the current access token will expire |
|  | refreshToken | String | Refresh token of the newly generated access token  
**Returned on:** authorization\_code grant type with authCode |
|  | refreshExpiresIn | Number | Amount of time until the current refresh token is expired (in seconds)  
**Returned on:** authorization\_code grant type with authCode |
|  | refreshExpiresAt | Timestamp | Timestamp (in seconds epoch) of the time the current refresh token will expire  
**Returned on:** authorization\_code grant type with authCode |

Example Response

```json
{
    "status": {
        "code": 1000,
        "description": "Success"
    },
    "data": {
        "accessToken": "34362373-66e8-4db0-80e5-0755b67e51f9",
        "tokenType": "Bearer",
        "expiresIn": 1800,
        "expiresAt": 1550133185,
        "refreshToken": "9e80be84-5eb7-4e8c-a885-a36ff3eb6684",
        "refreshExpiresIn": 3600,
        "refreshExpiresAt": 1550134985
    }
}
```

## Response Codes

| HTTP Status Code | Business Code | Description |
| :-- | :-- | :-- |
| 401 | 9300 | Invalid authorization code |
| 401 | 9300 | This application requires codeChallenge verification |
| 403 | 9503 | Invalid authorization method for current credentials |

See list of [Generic Response Codes](../references/generic-response-codes.html).
