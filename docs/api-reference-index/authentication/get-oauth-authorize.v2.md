---
source_url: "https://developer.scb/#/documents/api-reference-index/authentication/get-oauth-authorize.v2.html"
source_route: "#/documents/api-reference-index/authentication/get-oauth-authorize.v2.html"
source: SCB Developer Portal
content_hash: bb6869b543e3c724a60f22408ad81fdfdd9f62c7c1541d4a568e25592ffe6ad8
---

# 

GET

/​v2/​oauth/​authorize

This endpoint authorize whether the application is valid, allow the login to proceed by returning login redirection URL.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v2/oauth/authorize`  

## Request Header

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| apikey | String | Required | API authorization key respective to each partner obtained from partner onboarding process |
| apisecret | String | Required | API authorization secret obtained from partner onboarding process |
| resourceOwnerId | String | Required | The hash value of the userid, or related user identification value. If no resourceOwnerId available, use applicationId |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call |
| response-channel | String | Required | Channel to present the login interface to the user  
**Value:**  
**\- mobile**: Partner will receive callbackURL in response to redirect to Easy Simulator App  
**\- mobile\_mma**: Partner will receive callbackURL in response to redirect to Mae Manee Simulator App |
| endState | String | Required | End of authentication flow redirection method to the partner application  
**Values:**  
\- **mobile\_app**: Redirect back to 3rd party mobile application  
\- **mobile\_web**: Redirect back to 3rd party web page natively on the mobile phone browser |
| accept-language | String | Optional | The language of the content in the response payload  
**Values:  
\- EN (Default)  
\- TH** |
| applicationId | String | Optional | API key of the application when the caller is the authorizer |
| redirectOption | String | Optional | Key of the alternative callback url that is registered to the specified endState |

## Request Query

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| <any> | String | Optional | Contains the key and value of what the partner requires for the re-direct from our front-end to the partner's re-direct URL  
**Reserved field names:** code, state, status  
**Maximum length:** 255 characters.  
  
**Remarks:** Query field name that coincides with the reserved names will be scrubbed/overwritten |

Example Request

```javascript
curl -X GET \
  https://api-sandbox.partners.scb/partners/sandbox/v2/oauth/authorize \
  -H 'accept-language: EN' \
  -H 'apikey: <Your API Key>' \
  -H 'apisecret: <Your API Secret>' \
  -H 'endState: mobile_app' \
  -H 'requestUId: c385f890-ba04-4973-9939-98ce407ed740' \
  -H 'resourceOwnerId: <Your API Key>' \
  -H 'response-channel: mobile'
```

[Download Postman Collection](authentication.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | callbackUrl | String | Redirection URL to generate the access token |

Example Response

```json
{
    "status": {
        "code": 1000,
        "description": "Success"
    },
    "data": {
        "callbackUrl": "scbeasysim://login/6d0a4642-77cb-4372-b595-029608bb5927"
    }
}
```

## Response Codes

| HTTP Status Code | Business Code | Description |
| :-- | :-- | :-- |
| 400 | 1101 | Missing required headers (response-channel) |
| 400 | 1102 | Invalid response-channel |

See list of [Generic Response Codes](../references/generic-response-codes.html).
