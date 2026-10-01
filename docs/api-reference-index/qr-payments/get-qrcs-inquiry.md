---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/get-qrcs-inquiry.html"
source_route: "#/documents/api-reference-index/qr-payments/get-qrcs-inquiry.html"
source: SCB Developer Portal
content_hash: 7c3752d6c801937c6a47cf93d74b84fa57ea81f581d6dea46128534e0ede3b78
---

# 

GET

/​v1/​payment/​qrcode/​creditcard/​{qrId}

This API supports the inquiry of a QRCS transaction using QRID. The QRID is generated on a successful API call to [QRCS generation](../../api-reference-index/qr-payments/post-qrcode-create.html). The transaction details will only be returned to the API caller if the inquired transaction is fully paid.

This API is typically used when the partner does not receive a payment confirmation for a QRCS transaction and would like to check if the transaction has been successfully paid for.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/creditcard/{qrId}`

## Request Header

| Name | Type | Required/Optional | Description |
| :-- | :-- | :-- | :-- |
| content-type | String | Required | Content type of request payload  
**Value:  
application/json** |
| resourceOwnerId | String | Required | The system identifier, use the value of apikey |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call |
| authorization | String | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /partners/v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Optional | The language of the content in the request payload  
**Values:  
\- EN (Default)  
\- TH** |

## Query String Parameter

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| qrId | String | Required | Unique identifier of QR code.  
**Length: up to 20** |

## Example Request

```javascript
  curl -X POST \
      https://api-sandbox.partners.scb/partners/sandbox/v1/payment/qrcode/creditcard/{qrId}     \
      -H 'Accept-Language: EN' \
      -H 'Content-Type: application/json' \
      -H 'Postman-Token: 9806954a-6c5b-4c15-ae5c-01ab38f72b10' \
      -H 'authorization: Bearer 5ac2b470-e839-4adf-8497-648a4db495a7' \
      -H 'cache-control: no-cache' \
      -H 'requestUId: 871872a7-ed08-4229-a637-bb7c733305db' \
      -H 'resourceOwnerId: l7f7b936ead92e4c5b87241cf9cca7565a' \
```

[Download Postman Collection](payment-thai-qr.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | See Response Code below for reference |
|  | description | String | Description of Response Code |
| data |  |  |  |
|  | transactionId | String | Transaction ID of the transaction |
|  | amount | String | Transaction Amount |
|  | transactionDateandTime | String | Transaction Date and Time  
**Format:** yyyyMMdd HH:mm:ss |
|  | merchantPAN | String | Merchant PAN number from card scheme, up to 16 characters |
|  | consumerPAN | String | Customer PAN number from card scheme, up to 16 characters |
|  | currencyCode | String | Currency Code of Transaction (764 for Thai Baht) |
|  | merchantId | String | Merchant ID  
This value will match with the value that partner submitted to create QR Code |
|  | terminalId | String | Terminal ID  
This value will match with the value that partner submitted to create QR Code |
|  | qrId | String | QR ID Information |
|  | traceNo | String | Terminal Trace No |
|  | authorizeCode | String | Card Scheme Authorize Code |
|  | paymentMethod | String | Fix to QRCS |
|  | transactionType | String | Type of Transaction  
**SETTLED for payment successful transaction** |
|  | channelCode | String | Channel Code of Transaction  
**For Example : VISA, MASTER** |
|  | invoice | String | Transaction Invoice Number  
This value will match with the value that partner submitted to create QR Code |
|  | note | String | Transaction Note  
This value will match with the value that partner submitted to create QR Code |

## Example Response

```json
{
        "status": {
            "code": 1000,
            "description": "Success"
        },
        "data": {
            "transactionId": "20190910121630805000000",
            "amount": "8284.50",    
            "transactionDateandTime": "20190912 10:32:46",
            "merchantPAN": "4761320000000011", 
            "consumerPAN": "999999xxxxxx0001",
            "currencyCode": "764",
            "merchantId": "447434058100730",
            "terminalId": "073334824590333",
            "qrId": "20190910121630805000000",   
            "traceNo": "000001", 
            "authorizeCode": "489332",
            "paymentMethod": "QRCS",
            "transactionType": "SETTLED",
            "channelCode": "VISA",
            "invoice": "SCB0001",
            "note": "Additional note"
        }
    }    
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
