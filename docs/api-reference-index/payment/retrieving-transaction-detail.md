---
source_url: "https://developer.scb/#/documents/api-reference-index/payment/retrieving-transaction-detail.html"
source_route: "#/documents/api-reference-index/payment/retrieving-transaction-detail.html"
source: SCB Developer Portal
content_hash: 13733d9724d3e757e9d687d791adaa449d949f5e1927a22e2fd9d34a82be6f1d
---

# 

GET

/​v2/​transactions/​{transactionId}

This endpoint retrieves the details of a specific transaction given a transaction ID

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v2/transactions/{transactionId}`

## Request Header

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| authorization | String | Conditional | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Optional | The language of the content in the request payload  
**Values:  
\- EN (Default)  
\- TH** |
| resourceOwnerId | String | Required | The hash value of the userid, or your application id value |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call |

## Request Parameter

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| transactionId | String | Required | ID from the transaction which was created in v3/deeplink/transactions |

Example Request

```javascript
curl -X GET \
  https://api-sandbox.partners.scb/partners/sandbox/v2/transactions/{transactionId} \
  -H 'accept-language: EN' \
  -H 'authorization: Bearer <Your Access Token>' \
  -H 'requestUId: 646fdf72-5feb-48e8-baaa-54dafb8e6317' \
  -H 'resourceOwnerId: <Your API Key>'
```

[Download Postman Collection](deeplink-transaction.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | transactionId | String | A unique ID of the transaction, same as the request parameter |
|  | userRefId | String | Hashed resourceOwnerId that our system will use to identify the user with |
|  | transactionType | Enum | Type of payment the transaction was completed with value:  
• “PURCHASE” |
|  | transactionSubType | Array of Enum | Subtype of payment the transaction was completed with possible values for the “PURCHASE” transaction:  
• “BP”: Bill Payment  
• “CCFA”: Credit Card Full Amount  
• “CCIPP”: Credit Card Installment Payment Plan  
  
**Note:** Multiple values can be selected |
|  | transactionMethod | Enum | Type of payment method customer chose  
Possible values:  
• “BP”: Bill Payment  
• “CCFA”: Credit Card Full Amount  
• “CCIPP“: Credit Card Installment Payment Plan |
|  | paidAmount | Decimal | Amount paid in the transaction |
|  | billPayment | Object | A JSON object containing details of the Bill Payment transaction  
**Required where:** the transactionType is “PURCHASE” and the transactionSubType includes “BP” |
|  | billPayment.paymentAmount | Decimal | Amount to be paid per transaction |
|  | billPayment.accountTo | String | Account number or Biller ID  
  
**Note:** Partners can get the **Biller ID** on merchant profile of their application |
|  | billPayment.ref1 | String | Reference number required for the relevant payment methods |
|  | billPayment.ref2 | String | Reference number required for the relevant payment methods  
**Required where:** Supporting Reference field under merchant profile of application is set to Two references |
|  | billPayment.ref3 | String | Reference number required for the relevant payment methods to identify endpoint for receiving payment confirmation  
**Format:** Reference 3 Prefix + (value), example: SCB1234  
  
**Note:** Partners can get the **Reference 3 Prefix** and set the **Payment Confirmation Endpoint** on merchant profile of their application |
|  | billPayment.accountFrom | String | Account number of the customer |
|  | creditCardFullAmount | Object | A JSON object containing details of the Credit Card Full Amount transaction  
**Required where:** the transactionType is “PURCHASE” and the transactionSubType includes “CCFA” |
|  | creditCardFullAmount.merchantId | String | Merchant ID of the merchant for the full amount payment  
  
**Note:** Partners can get the **Merchant ID** on merchant profile of their application |
|  | creditCardFullAmount.terminalId | String | Terminal ID of the merchant for the full amount payment  
  
**Note:** Partners can get the **Terminal ID** on merchant profile of their application |
|  | creditCardFullAmount.orderReference | String | Order reference from the merchant  
**Format:** Only alphanumeric allowed |
|  | creditCardFullAmount.paymentAmount | Decimal | Amount to be paid per transaction |
|  | creditCardFullAmount.approveCode | String | Approve code of the transaction  
**Remark:**  
• Response only statusCode = 1 and 4 |
|  | creditCardFullAmount.traceNo | String | Trace number of the transaction  
**Remark:**  
• Response only statusCode = 1 and 4 |
|  | creditCardFullAmount.accountFrom | String | Account number of the SCB customer chosen to pay  
**Remark:**  
• Response only statusCode = 1 and 4 |
|  | creditCardFullAmount.merchantName | String | Payee name  
**Remark:**  
• Response only statusCode = 1 and 4 |
|  | installmentPaymentPlan | Object | A JSON object containing details of the Installment Payment transaction  
**Required where:** the transactionType is “PURCHASE” and the transactionSubType includes “CCIPP” |
|  | installmentPaymentPlan.merchantId | String | Merchant ID of the merchant for the installment payment  
  
**Note:** Partners can get the **Merchant ID** on merchant profile of their application |
|  | installmentPaymentPlan.terminalId | String | The terminal ID of the merchant for the installment payment  
  
**Note:** Partners can get the **Terminal ID** on merchant profile of their application |
|  | installmentPaymentPlan.orderReference | String | Order reference from the merchant  
**Format:** Only alphanumeric allowed  
**Note:** For Sandbox, partner can send any value |
|  | installmentPaymentPlan.paymentAmount | Decimal | Payment amount in the transaction |
|  | installmentPaymentPlan.tenor | String | The tenor of the transaction. |
|  | installmentPaymentPlan.ippType | ENUM | The installment payment plan type of calculate the interest rate and absorb interest rate. The values are possible ("1", "2", "3")  
**Values:**  
**• 1:** Merchant absorb interest rate for the current transaction.  
**• 2:** Customer or consumer absorb interest rate for the current transaction.  
**• 3:** Supplier absorb interest rate for the current transaction. |
|  | installmentPaymentPlan.prodCode | String | The product code of product.  
**Note:** For Sandbox, the prodCode is “1001” |
|  | installmentPaymentPlan.accountFrom | String | Account number of the SCB customer chosen to pay  
**Remark:**  
• Response only statusCode = 1 and 4 |
|  | partnerId | String | Initiating partner's identifier key |
|  | partnerName | String | Initiating partner's application name |
|  | sessionValidityPeriod | Integer | Timeout period for the new transaction; in seconds |
|  | createdTimestamp | DateTime | Timestamp of when the transaction was created |
|  | updatedTimestamp | DateTime | Timestamp of when the transaction was last updated |
|  | fee | Integer | **Remark:**  
• Response only statusCode = 1 and 4 |
|  | statusCode | Integer | Status of the transaction which can be one of the following:  
0 — for "PENDING"  
1 — for "PAID"  
2 — for "CANCELLED"  
3 — for "INVALID"  
4 — for "PARTIAL"  
5 — for "EXPIRED" |
|  | merchantMetaData | Object | A JSON object containing any metadata the merchant needs to log regarding the new transaction  
**\- paymentInfo:** Display the additional transaction details section according to standardize layout for partner bill payment, fields sequence as same as the fields sequence in metadata  
  
**Note:** merchantMetaData.paymentInfo\[\] is a dimension array with length: 10  
Refer to [Metadata Guidelines](./payment-transaction/Metadata_guide_20210209.pdf) for full recommended specifications |

Example Response

```json
{
    "status": {
        "code": 1000,
        "description": "Success"
    },
    "data": {
        "transactionId": "a4220ec2-bd0b-441f-b333-7c32d7b6d7f9",
        "userRefId": "7b109a37-09ba-4a62-aa56-9ea7ea3e97ab",
        "transactionType": "PURCHASE",
        "transactionSubType": ["BP", "CCFA", "CCIPP"],
        "transactionMethod": "BP",
        "paidAmount": 3500.00,
        "billPayment": {
            "paymentAmount": 3500.00,
            "accountTo": "001230083",
            "ref1": "523863962",
            "ref2": "2626539343",
            "ref3": "ABC123",
            "accountFrom": "029470043",
        },
        "creditCardFullAmount": {
            "merchantId": "802913322065774",
            "terminalId": "777200043828345",
            "orderReference": "A091DPM9001",
            "paymentAmount": 3500.00,
            "approveCode": "300844",
            "traceNo": "072538",
            "accountFrom": null,
            "merchantName": "Merchant1234"
        },
      "installmentPaymentPlan": {
           "merchantId": "3850067890",
           "terminalId": "765400041888244",
           "orderReference": "A091DPM9001",
           "paymentAmount": 3500.00,
           "tenor": "12",
           "ippType": "3",
           "prodCode": "1001",
           "accountFrom": null,
     },
        "partnerId": "66900789566433434",
        "partnerName": "Trusted Partner",
        "sessionValidityPeriod": 60000,
        "createdTimestamp": "2022-01-20T13:00:00+07:00",
        "updatedTimestamp": "2022-01-20T13:41:00+07:00",
        "fee": 10,
        "statusCode": 1,
        "merchantMetaData": {
            "deeplinkUrl": "scbeasysim://purchase/a4220ec2-bd0b-441f-b333-7c32d7b6d7f9",
            "callbackUrl": "https://ticket.io/event/3v3123ady",
            "paymentInfo": [
                //anyRelevantPaymentMetadata...
            ],
            //anyOtherRelevantMetadata...
        }
    }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
