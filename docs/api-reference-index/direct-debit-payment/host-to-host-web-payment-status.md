---
source_url: "https://developer.scb/#/documents/api-reference-index/direct-debit-payment/host-to-host-web-payment-status.html"
source_route: "#/documents/api-reference-index/direct-debit-payment/host-to-host-web-payment-status.html"
source: SCB Developer Portal
content_hash: 5fa302367536a20fa904d11e3271d67a2f6e896e084df7bf0232ee69851872b7
---

# Host to Host Web Payment Status (POST)

This is callback to merchant for return web payment status as a result of payment.

## Prerequisites

-   Https
-   Callback path

## Response

| Name | Data Type | Description |
| --- | --- | --- |
| status | Integer | A business status code of request |
| body | \[Object\] |  |
| body.merchantId | String | Merchant ID |
| body.subAccountId | String | Merchant Sub-account |
| body.encryptedValue | String | Payment information please see more detail below. |
| body.validationMessages | Array\[Object\] | Validate Message please see more detail below. |

**Payment Information**

| Name | Data Type | Description |
| --- | --- | --- |
| refNumber | String | Merchant reference number |
| refDateTime | String | Merchant reference date and time per transaction |
| amount | Number | Transaction amount |
| currency | String | Transaction currency |
| customerRef | String | Customer reference |
| txnNumber | String | Unique transaction number from SCB payment gateway |
| txnDateTime | String | Transaction date and time from SCB payment gateway |
| statusCode | String | Transaction status code [see link for payment status](../../api-reference-index/references/direct-debit-redirect-pay.html) |
| statusDesc | String | Transaction status description |
| responseCode | String | Transaction rejected response code (transaction rejected only) |
| callbackH2HUrl | String | Merchant callback URL |

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
        "subAccountId": "202006307560",
        "encryptedValue": "<Encrypt Data>", 
        "validationMessages": [] 
    }
}
```
