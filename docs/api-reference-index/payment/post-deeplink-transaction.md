---
source_url: "https://developer.scb/#/documents/api-reference-index/payment/post-deeplink-transaction.html"
source_route: "#/documents/api-reference-index/payment/post-deeplink-transaction.html"
source: SCB Developer Portal
content_hash: ff192f2c2f05fe22d0a8d1df17a3e229a3684e239acb35cb5fa063b4483e4456
---

# 

POST

/​v3/​deeplink/​transactions

This endpoint creates a transaction record with deeplink URL. Partners who would like to initiate a purchase process to be completed via deeplink integration with partner channel for SCB customer must first log the details of this transaction

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v3/deeplink/transactions`  

## Request Header

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| content-type | String | Required | Content type of request payload  
**Value:  
\- application/json** |
| authorization | String | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Optional | The language of the content in the response payload  
**Values:  
\- EN (Default)  
\- TH** |
| resourceOwnerId | String | Required | The hash value of the userid, or your application id value |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call |
| channel | String | Required | Name of the partner channel to collect deeplink URL for transaction completion  
**Value:  
\- scbeasy** |

## Request Body

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| transactionType | Enum | Required | Type of the payment transaction is expected to be completed with value:  
• “PURCHASE” |
| transactionSubType | Array of Enum | Required | Subtype of the payment transaction is expected to be completed with possible values for the “PURCHASE” transaction:  
• “BP”: Bill Payment  
• “CCFA”: Credit Card Full Amount  
• “CCIPP”: Credit Card Installment Payment Plan  
  
**Note:** Multiple values can be selected |
| sessionValidityPeriod | Integer | Optional | Timeout period for the new transaction; in seconds. Optional for merchants who do not need extended validity period to complete a transaction  
**Default value:** 0 (disabled)  
**Allowed values:** 60 (1 min) – 1800 (30 mins) |
| sessionValidUntil | Number  
(epoch time in seconds) | Optional | Timestamp when the transaction will be expired  
**Valid timestamp:** 1 min - 30 mins from creation time  
  
**Note:** This will not be considered if “sessionValidityPeriod” is specified. Input epoch times are considered as GMT+7 (Bangkok Time) |
| billPayment | Object | Conditional | A JSON object containing details of the Bill Payment transaction  
**Required where:** the transactionType is “PURCHASE” and the transactionSubType includes “BP” |
| billPayment.paymentAmount | Decimal(14,2) | Required | Amount to be paid per transaction |
| billPayment.accountTo | String(15) | Required | Account number or Biller ID  
  
**Note:** Partners can get the **Biller ID** on merchant profile of their application |
| billPayment.accountFrom | String(10) | Optional | Account number of the customer |
| billPayment.ref1 | String(20) | Required | Reference number required for the relevant payment methods |
| billPayment.ref2 | String(20) | Optional | Reference number required for the relevant payment methods  
**Required if:** Supporting Reference field under merchant profile of application is set to Two references |
| billPayment.ref3 | String(20) | Optional | Reference number required for the relevant payment methods to identify endpoint for receiving payment confirmation.  
**Format:** Reference 3 Prefix + (value), example: SCB1234  
  
**Note:** Partners can get the **Reference 3 Prefix** and set the **Payment Confirmation Endpoint** on merchant profile of their application |
| creditCardFullAmount | Object | Conditional | A JSON object containing details of the Credit Card Full Amount transaction  
**Required where:** the transactionType is “PURCHASE” and the transactionSubType includes “CCFA” |
| creditCardFullAmount.merchantId | String(20) | Required | Merchant ID of the merchant for the full amount payment  
  
**Note:** Partners can get the **Merchant ID** on merchant profile of their application |
| creditCardFullAmount.terminalId | String(20) | Optional | Terminal ID of the merchant for the full amount payment  
  
**Note:** Partners can get the **Terminal ID** on merchant profile of their application |
| creditCardFullAmount.orderReference | String(20) | Required | Order reference from the merchant  
**Format:** Only alphanumeric allowed |
| creditCardFullAmount.paymentAmount | Decimal(15,2) | Required | Amount to be paid per transaction |
| installmentPaymentPlan | Object | Conditional | A JSON object containing details of the Installment Payment transaction  
**Required where:** the transactionType is “PURCHASE” and the transactionSubType includes “CCIPP” |
| installmentPaymentPlan.merchantId | String(20) | Required | Merchant ID of the merchant for the installment payment  
  
**Note:** Partners can get the **Merchant ID** on merchant profile of their application |
| installmentPaymentPlan.terminalId | String(20) | Optional | The terminal ID of the merchant for the installment payment  
  
**Note:** Partners can get the **Terminal ID** on merchant profile of their application |
| installmentPaymentPlan.orderReference | String(20) | Required | Order reference from the merchant  
**Format:** Only alphanumeric allowed  
  
**Note:** For Sandbox, partner can send any value |
| installmentPaymentPlan.paymentAmount | Decimal(14,2) | Required | Amount to be paid per transaction |
| installmentPaymentPlan.tenor | String(2) | Conditional | The tenor of the transaction.  
**Required where:** The ippType is NOT NULL |
| installmentPaymentPlan.ippType | ENUM | Optional | The installment payment plan type of calculate the interest rate and absorb interest rate. The values are possible ("1", "2", "3")  
**Values:**  
• 1: Merchant absorb interest rate for the current transaction.  
• 2: Customer or consumer absorb interest rate for the current transaction.  
• 3: Supplier absorb interest rate for the current transaction. |
| installmentPaymentPlan.prodCode | String(20) | Conditional | The product code of product.  
**Required where:** ippType is "3”  
  
**Note:** For Sandbox, the prodCode is “1001” |
| merchantMetaData | Object | Optional | A JSON object containing any metadata the merchant needs to log regarding the new transaction  
**\- paymentInfo:** Display the additional transaction details section according to standardize layout for partner bill payment, fields sequence as same as the fields sequence in metadata  
  
**Note:** merchantMetaData.paymentInfo\[\] is a dimension array with length: 10  
Refer to [Metadata Guidelines](./payment-transaction/Metadata_guide_20210209.pdf) for full recommended specifications |

Example Request

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v3/deeplink/transactions \
  -H 'content-type: application/json' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'accept-language: EN' \
  -H 'resourceOwnerId: <Your API Key>' \
  -H 'requestUId: d7e992f3-c9f1-4071-8a4a-6c5839c8d317' \
  -H 'channel: scbeasy' \
  -d '{
    "transactionType": "PURCHASE",
    "transactionSubType": ["BP", "CCFA", "CCIPP"],
    "sessionValidityPeriod": 60,
    "sessionValidUntil": "",
    "billPayment": {
        "paymentAmount": 10000.00,
        "accountTo": "123456789012345",
        "ref1": "ABCDEFGHIJ1234567890",
        "ref2": "ABCDEFGHIJ1234567890",
        "ref3": "ABCxxxx",
    },
    "creditCardFullAmount": {
        "merchantId": "4218170000000159",
        "terminalId": "56200003",
        "orderReference": "AA100001",
        "paymentAmount": 10000.00
    },
    "installmentPaymentPlan": {
        "merchantId": "4218170000000159",
        "terminalId": "56200003",
        "orderReference": "AA100001",
        "paymentAmount": 10000.00,
        "tenor": "12",
        "ippType": "3",
        "prodCode": "1001",
    },
    "merchantMetaData": {
        "callbackUrl": "http://my.server.com/bar",
        "merchantInfo": {
    "name": "SANDBOX MERCHANT NAME"
       },
    }
  }'
```

[Download Postman Collection](deeplink-transaction.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | userRefId | String | Hashed resourceOwnerId that our system will use to identify the user with |
|  | transactionId | String | ID of the newly created transaction |
|  | deeplinkUrl | String | Deeplink URL of the requested action associated with the transaction |

Example Response

```json
{
    "status": {
        "code": 1000,
        "description": "Deeplink successfully created"
    },
    "data": {
        "transactionId": "cae09821-a23d-4034-a35a-50c44a41ef67",
        "deeplinkUrl": "scbeasysim://purchase/254ae415-352c-48b2-9527-2e0190269976",
        "userRefId": "7efe0db1-2af6-49b1-b9e3-71a83ed80227"
    }
}
```

## Response Codes

| HTTP Status Code | Business Code | Description |
| :-- | :-- | :-- |
| 201 | 1000 | Deeplink successfully created |
| 501 | 4101 | The feature is not supported |

See list of [Generic Response Codes](../references/generic-response-codes.html).
