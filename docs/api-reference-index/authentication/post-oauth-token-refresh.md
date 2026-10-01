---
source_url: "https://developer.scb/#/documents/api-reference-index/authentication/post-oauth-token-refresh.html"
source_route: "#/documents/api-reference-index/authentication/post-oauth-token-refresh.html"
source: SCB Developer Portal
content_hash: 7169620f3f16217b7635440d01dc679d8131fc89022c7b89af5d789d0b2b272d
---

# 

POST

/​v1/​oauth/​token/​refresh

This endpoint refresh the expired access token, generating a new set of the access token with the same access right as the previously generated prior.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token/refresh`  

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
| refreshToken | String | Required | Refresh token of the previously generated access token |

Example Request

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/oauth/token/refresh \
  -H 'Content-Type: application/json' \
  -H 'accept-language: EN' \
  -H 'requestUId: 83adbcec-356d-4505-9f13-b2474658c078' \
  -H 'resourceOwnerId: <Your API Key>' \
  -d '{
    "applicationKey" : "<Your API Key>",
    "applicationSecret" : "<Your API Secret>",
    "refreshToken" : "<Refresh token of the previously generated access token>"
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
        "accessToken": "84f6f823-0a97-459c-a438-8a5a7945cfb6",
        "tokenType": "Bearer",
        "expiresIn": 1800,
        "expiresAt": 1550214314,
        "refreshToken": "b8d53955-13f1-426e-8f65-a7b36f0bbee8",
        "refreshExpiresIn": 3600,
        "refreshExpiresAt": 1550216114
    }
}
```

## Response Codes

| HTTP Status Code | Business Code | Description |
| :-- | :-- | :-- |
| 401 | 9300 | Invalid refresh token |

See list of [Generic Response Codes](../references/generic-response-codes.html).
