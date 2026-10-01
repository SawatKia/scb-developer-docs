---
source_url: "https://developer.scb/#/documents/api-reference-index/direct-debit-payment/host-to-host-registration-status.html"
source_route: "#/documents/api-reference-index/direct-debit-payment/host-to-host-registration-status.html"
source: SCB Developer Portal
content_hash: e0a016977fd44d215737272868da35531215b523271e506df1ddcc943a9dadf5
---

# Host to Host Registration Status (POST)

This is callback to merchant for return customer registration status as a result of web customer registration.

## Prerequisites

-   Https
-   Callback path

## Response

| Name | Data Type | Description |
| --- | --- | --- |
| status | Integer | A business status code of request |
| body | \[Object\] |  |
| body.merchantId | String | Merchant ID |
| body.encryptedValue | String | Registration information encrypted result please see more detail below. |
| body.validationMessages | Array\[Object\] | Validate Message please see more detail below. |

**Registration Information**

| Name | Data Type | Description |
| --- | --- | --- |
| regRef | String | Registration reference |
| ref1 | String | Customer reference (Reference No.1) |
| ref2 | String | Other reference (Reference No.2) |
| statusCode | String | Registration status code [see link for register status](../../api-reference-index/references/direct-debit-registration-and-api-pay.html) |
| statusDesc | String | Registration status description |
| errorCode | String | Registration error code |
| accountNo | String | Customer's account number registration (Only register successful) |
| backURL | String | Merchant callback URL |

**Validation Messages:**

| Name | Type | Description |
| --- | --- | --- |
| message | String | Error message |
| description | String | Description of message |

### Example Response

```json
{ 
    "status": 200,
    "body": { 
        "merchantId": "2020000001",
        "encryptedValue": "<Encrypt Data>",
        "validationMessages": [] 
    }
}
```
