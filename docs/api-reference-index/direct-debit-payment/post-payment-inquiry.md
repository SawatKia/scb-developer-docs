---
source_url: "https://developer.scb/#/documents/api-reference-index/direct-debit-payment/post-payment-inquiry.html"
source_route: "#/documents/api-reference-index/direct-debit-payment/post-payment-inquiry.html"
source: SCB Developer Portal
content_hash: ac2cb64de228c97332487407aa577241cf1941af8ab7db6d2509f37878a70b32
---

# 

POST

/​v1/​payment/​inquiry

This endpoint is for merchant to inquire payment status as a result of direct debit payment via SCB direct debit.

**Sandbox URL:** [https://api-sandbox.partners.scb/partners/sandbox/v1/payment/inquiry](https://api-sandbox.partners.scb/partners/sandbox/v1/payment/inquiry)

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
| encryptedValue | String | Required | Payment info encrypted please see more detail below.  
[Example Code for Encryption and Decryption](../references/example-code-encryption-decryption.html) |

**Payment Information** (**Format:** Json) encrypted please refer to this following properties:

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| refNumber | String (20) | Required | Merchant reference |
| refDateTime | String (14) | Required | Merchant reference date and time per transaction  
**Format: yyyyMMddHHmmss** |
| customerRef | String (20) | Optional | Customer reference |

### Example Request

```json
curl -X POST \
    https://api-sandbox.partners.scb/partners/sandbox/v1/payment/inquiry \
    -H 'authorization: Bearer <Your Access Token>' \
    -H 'resourceOwnerId: <Your API Key>' \
    -H 'requestUId: 5e1d0610-74e7-4c79-bf04-e074d3d7099a' \
    -H 'content-type: application/json' \
    -H 'accept-language: EN' \
    -d '{
    "merchantId": "2020000205",
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
|  | encryptedValue | String | Payment info encrypted please see more detail below.  
[Example Code for Encryption and Decryption](../references/example-code-encryption-decryption.html) |
|  | validationMessages | Array\[Object\] | Validation Messages please see more detail below. |

### Payment Information

| Name | Type | Description |
| --- | --- | --- |
| regNumber | String | Merchant reference number |
| refDateTime | String | Merchant reference date and time per transaction  
**Format: yyyyMMddHHmmss** |
| amount | Number | Transaction amount  
**Ex. 100.00** |
| currency | String | Transaction currency  
**Ex. THB** |
| customerRef | String | Customer reference |
| txnNumber | String | Unique transaction number from SCB |
| txnDateTime | String | Transaction date and time from SCB |
| statusCode | String | Transaction status code [see link for payment status](../../api-reference-index/references/direct-debit-redirect-pay.html) |
| statusDesc | String | Transaction status description |
| responseCode | String | Transaction rejected respond code (transaction rejected only) |

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
    "body": {
        "merchantId": "2020000001",
        "encryptedValue": "<Encrypt Data>",
        "validationMessages": []
    }
}
```

### Response Code

See list of [Generic Response Codes](../references/generic-response-codes.html)
