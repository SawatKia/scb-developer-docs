---
source_url: "https://developer.scb/#/documents/api-reference-index/direct-debit-payment/post-redirect-pay.html"
source_route: "#/documents/api-reference-index/direct-debit-payment/post-redirect-pay.html"
source: SCB Developer Portal
content_hash: 7c6008946bcbfcf48de92efb65214ef4a5a50ac5a195ba20d25dacca72f4a50c
---

# 

POST

/​v1/​payment/​web/​ddpay

This endpoint is for merchant to initialize website for customer payment as a payer via SCB direct debit service.

**Sandbox URL:** [https://api-sandbox.partners.scb/partners/sandbox/v1/payment/web/ddpay](https://api-sandbox.partners.scb/partners/sandbox/v1/payment/web/ddpay)

**Note:** This API merchant need to encrypt and decrypt a transaction data by public key.

## Request Header

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| content-type | String | Required | Content type of request payload  
**Value:**  
**\- application/json** |
| authorization | String | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| resourceOwnerId | String | Required | The system identifier, use the value of apikey |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call |
| accept-language | String | Optional | The language of the content in the request payload  
**Values:**  
**\- EN (Default)**  
**\- TH** |

## Request Body

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| merchantId | String (10) | Required | Merchant ID  
**Ex. 20200412000001** |
| subAccountId | String (12) | Required | Merchant Sub-account  
**Ex. 8943289551** |
| encryptedValue | String | Required | Payment info encrypted please see more detail below.  
[Example Code for Encryption and Decryption](../references/example-code-encryption-decryption.html) |

**Payment Information** (**Format:** Json) encrypted please refer to this following properties:

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| refNumber | String (20) | Required | Merchant reference |
| refDateTime | String (14) | Required | Merchant reference date and time per transaction  
**Format: yyyyMMddHHmmss** |
| amount | Number (12,2) | Required | Transaction amount  
**Ex. 100.00** |
| currency | String (3) | Required | Transaction Currency  
**Ex. THB** |
| callBackUrl | String (255) | Required | Return result to merchant with the URL |
| customerRef | String (20) | Required | Customer reference |

### Example Request

```json
curl -X POST \
    https://api-sandbox.partners.scb/partners/sandbox/v1/payment/web/ddpay \
    -H 'authorization: Bearer <Your Access Token>' \
    -H 'resourceOwnerId: <Your API Key> ' \
    -H 'requestUId: 5e1d0610-74e7-4c79-bf04-e074d3d7099a' \
    -H 'content-type: application/json' \
    -H 'accept-language: EN' \
    -d '{
    "merchantId": "2020000235",
    "subAccountId": "202005278271",
    "encryptedValue": "<Encrypt Data>"
}'
```

[Download Postman Collection](<./postman/Direct Debit via SCB.postman_collection v1.3.json>)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | merchantId | String | Merchant ID |
|  | subAccountId | String | Merchant Sub-account |
|  | paymentURL | String | Unique web payment URL |
|  | validationMessages | Array\[Object\] | Validation Messages please see more detail below. |

### Validation Messages

| Name | Type | Description |
| --- | --- | --- |
| message | String | Error message |
| description | String | Description of message |

### Example Response

```json
{
    "status":{
        "code":1000,
        "description":"Success"
    },
    "data":{
        "merchantId":"2020000001",
        "subAccountId":"1293340504",
        "paymentURL":"https://www.pgw.scb.co.th/)?rqRef=fwfwfleerti4t5w3r2w2r",
        "validationMessages":[]
    }
}
```

### Response Code

See list of [Generic Response Codes](../references/generic-response-codes.html)
