---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/post-bscanc-confirm-payment.html"
source_route: "#/documents/api-reference-index/qr-payments/post-bscanc-confirm-payment.html"
source: SCB Developer Portal
content_hash: 7ba10977cab55d39f3d138a53c9acde1c55565806a4c0a988e1b3ddf528504cb
---

# 

POST

/​v1/​payment/​merchant/​rtp/​confirm

This endpoint support the B Scan C Payment API.

**Sandbox URL :** `https://api-sandbox.partners.scb/partners/sandbox/v1/payment/merchant/rtp/confirm`  

## Request Header

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| content-type | String | Required | Content type of request payload  
**Value:  
\- application/json** |
| authorization | String | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| resourceOwnerId | String | Required | The system identifier, use the value of apikey |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call |
| accept-language | String | Optional | The language of the content in the request payload  
**Values:  
\- EN (Default)  
\- TH** |

## Request Body

| Name | Type | Required | Description |
| :-- | :-: | :-: | :-- |
| qrData | String | Required | The B Scan C QR Code data read from Mobile Banking Application |
| payeeBillerId | String | Required | Biller ID  
Length: 15 |
| transactionAmount | String | Required | Transaction Amount  
Format in decimal (15,2) |
| reference1 | String | Required | Reference code 1  
Length: up to 20  
Data Type: \[AZ09\] English capital letter and number only. |
| reference2 | String | Required | **Conditional**  
Reference code 2 is required when Biller profile is set to 2 references  
Length: up to 20  
Data Type: \[AZ09\] English capital letter and number only. |
| reference3 | String | Required | **Conditional**  
Reference code 3 is required to identify end point for receiving payment confirmation  
**Format:** Prefix + reference 3 , example : SCB1234  
Length: up to 20  
Data Type: \[AZ09\] English capital letter and number only. |
| partnerTransactionID | String | Required | Unique Transaction ID from a partner  
**Format:** Biller ID 15 char + random 20 alphanumerics in upper case |
| payeeTerminalNo | String | Optional | Terminal ID |

Example Request

```javascript
curl -X POST \
  https://api-sandbox.partners.scb/partners/sandbox/v1/payment/merchant/rtp/confirm \
  -H 'Content-Type: application/json' \
  -H 'authorization: Bearer 30915739-27ba-4d6d-acb6-6902fc8c49d7' \
  -H 'resourceOwnerId: 8f26823c-ad30-42ef-a9fb-9252b35bd1fe' \
  -H 'requestUId: 786db854-49a9-4e76-a4ba-30b6d19ba233' \
  -H 'accept-language: EN' \    
  -d '{ 
    "qrData": "85058505435056303161FF4F10A00000067701200563", 
    "payeeBillerId": "123456789012345", 
    "transactionAmount": "1500.00", 
    "reference1": "12345678901234567890", 
    "reference2": "", 
    "reference3": "SCB01061900001",
    "partnerTransactionId": "102376737772201H819JM9Z1JI22I90918F"
}'
```

[Download Postman Collection](payment-thai-qr-bscanc.json)

## Response

### Main

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | Partner API response code |
|  | description | String | Partner API response description |
| data |  |  |  |
|  | partnerTransactionId | String | Partner Transaction ID |
|  | transactionId | String | SCB Transaction ID |
|  | transactionDateTime | String | Date Time of Transaction |
|  | exchangeRate | String | Exchange Rate between Transaction Currency and Equivalence Transaction Currency |
|  | transactionAmount | String | Echo Transaction Amount |
|  | transactionCurrency | String | Transaction Currency  
Using code defines a currency for transactions based on ISO 4217. Thai Baht is ‘764’. |
|  | equivalenceTransactionAmount | String | Payer Transaction Amount |
|  | equivalenceTransactionCurrency | String | Payer Currency |
|  | payerBankCode | String | Payer Bank Code |
|  | payerTepaCode | String | Payer TEPA Code |
|  | billerId | String | Echo Merchant Biller ID |
|  | reference1 | String | Echo Merchant Reference Code 1 |
|  | reference2 | String | Echo Merchant Reference Code 2 |
|  | reference3 | String | Echo Merchant Reference Code 3 |
|  | slipId | String | Transaction Slip ID use in Slip Verification API |
|  | originalTransaction | Object |  |

### originalTransaction

| Name | Type | Description |
| :-- | :-- | :-- |
| messageIdentification | String | Message Identification |
| messageNameIdentification | String | Message Name Identification |
| paymentInformationIdentification | String | Payment Information Identification |

Example Response

```json
{ 
    "status":{ 
        "code":1000,
        "description":"Success"
    },
    "data":{ 
        "originalTransaction":{ 
            "messageIdentification":"",
            "messageNameIdentification":"",
            "paymentInformationIdentification":""
        },
        "partnerTransactionId":"102376737772201H819JM9Z1JI22I90918F",
        "transactionId":"67bb8b8b-e205-440d-8a3a-f3a1b1668552",
        "transactionDateTime":"2019-06-01T09:00:00.000+07:00",
        "exchangeRate":"",
        "transactionAmount":"1500.00",
        "transactionCurrency":"",
        "equivalenceTransactionAmount":"",
        "equivalenceTransactionCurrency":"",
        "payerBankCode":"014",
        "payerTepaCode":"140",
        "billerId":"123456789012345",
        "reference1":"12345678901234567890",
        "reference2":"",
        "reference3":"SCB01061900001",
        "slipId":""
    }
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
