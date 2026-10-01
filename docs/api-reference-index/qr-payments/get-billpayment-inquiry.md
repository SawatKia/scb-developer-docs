---
source_url: "https://developer.scb/#/documents/api-reference-index/qr-payments/get-billpayment-inquiry.html"
source_route: "#/documents/api-reference-index/qr-payments/get-billpayment-inquiry.html"
source: SCB Developer Portal
content_hash: a2d12fd00cc05d00e0e745e53f090683d663e454bf3e3417106ca84c67a0305b
---

# 

GET

/​partners/​v1/​payment/​billpayment/​inquiry?{param}={value}

This endpoint support Thai QR Code Tag 30 and My Prompt QR (B Scan C) Transaction Inquiry. If the inquired transaction is successfully paid, the service will return transaction detail to partner.

Normally, the Inquiry API is provided to use in conjunction with Payment Confirmation. The recommended use case is when customer has informed partner that they have been paid successfully, but partner did not receive payment confirmation from SCB. Only then partner should use this Inquiry API to get the payment transaction detail.

## Request Header

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| content-type | String | Required | Content type of request payload  
Value: application/json |
| resourceOwnerId | String | Required | The system identifier, use the value of apikey |
| requestUId | String | Required | A unique identifier the client can generate to track the current request call |
| authorization | String | Required | OAuth token obtained after the user has provided consent and the authorized partner calls the /v1/oauth/token endpoint to retrieve this token |
| accept-language | String | Optional | The language of the content in the request payload**  
Values:  
\- EN (Default)  
\- TH** |

## Query String Parameter

| Name | Type | Required | Description |
| :-- | :-- | :-- | :-- |
| eventCode | String(10) | Required | Event code of payment type**  
Possible value:  
00300100 - Thai QR Code Tag 30 (C Scan B)  
00300104 - My Prompt QR (B Scan C)** |
| transactionDate | String(10) | Required | Date of transaction.  
Format: yyyy-MM-dd  
Example: 2019-10-28 |
| billerId | String(15) | Conditional | Biller ID from partner  
**Required if:** eventCode = 00300100 |
| reference1 | String(20) | Conditional | Reference Number 1 , up to 20 characters  
**Required if:** eventCode = 00300100 |
| reference2 | String(20) | Optional | Reference Number 2 , up to 20 characters |
| partnerTransactionId | String(35) | Conditional | Transaction ID from a partner  
**Required if:** eventCode = 00300104 |
| amount | Decimal (15,2) | Optional | Transaction Amount |

## Example Request

_Thai QR Code Tag 30_

```json
    curl -X POST \
      http://api-sandbox.scb.co.th/partners/sandbox/v1/payment/billpayment/inquiry?billerId=525887849220099&reference1=C12001&transactionDate=2020-01-01&eventCode=00300100 \
      -H 'Accept-Language: EN' \
      -H 'Content-Type: application/json' \
      -H 'authorization: Bearer <Your Access Token>' \
      -H 'requestUId: 871872a7-ed08-4229-a637-bb7c733305db' \
      -H 'resourceOwnerId: <Your API Key>' \
```

_My Prompt QR_

```json
    curl -X POST \
      http://api-sandbox.scb.co.th/partners/sandbox/v1/payment/billpayment/inquiry?partnerTransactionId=123456789012345&transactionDate=2020-01-01&eventCode=00300104 \
      -H 'Accept-Language: EN' \
      -H 'Content-Type: application/json' \
      -H 'authorization: Bearer <Your Access Token>' \
      -H 'requestUId: 871872a7-ed08-4229-a637-bb7c733305db' \
      -H 'resourceOwnerId: <Your API Key>' \
```

[Download Postman Collection](payment-tqrc-transaction-inquiry.json)

## Response

| Name | Parameter | Type | Description |
| :-- | :-- | :-- | :-- |
| status |  |  |  |
|  | code | Integer | See Response Code below for reference |
|  | description | String | Description of Response Code |
| data |  |  |  |
|  | eventCode | String | Event code of payment type**  
Possible value:**  
**00300100** - Thai QR Code Tag 30 (C Scan B)  
**00300104** - My Prompt QR (B Scan C) |
|  | transactionType | String | Transaction Type .**  
Possible value:  
\- Domestic Transfers  
\- International Transfers  
\- ExpressPayment Transfers** |
|  | reverseFlag | String | Reverse Flag for refund transaction only**  
R indicate transaction is refunded** |
|  | payeeProxyId | String | Promptpay proxy of payee either 12, 13 or 15 digit depending on the type of proxy:**  
+66891228788 - MSISDN  
1234567890123 - NATID  
123456789012345 - BILLERID (13 digit TaxID + 2 digit suffix)  
014123456789012 - EWALLETID** |
|  | payeeProxyType | String | Define type of proxy.  
**MSISDN - Mobile number  
NATID - Citizen ID, Tax ID, Government Customer ID  
BILLERID - Biller ID for Promptpay Bill Pay method  
EWALLETID - E-Wallet ID** |
|  | payeeAccountNumber | String | Account number linked with the proxy ID |
|  | payeeName | String | Display Name registered with PromptPay (Any ID/ITMX) |
|  | payerProxyId | String | **Optional** but will be available in case that payer presents QR code to payee:**  
+66891228788 - MSISDN  
1234567890123 - NATID  
123456789012345 - BILLERID (13 digit TaxID + 2 digit suffix)  
014123456789012 - EWALLETID** |
|  | payerProxyType | String | **Optional** but will be available in case that payer presents QR code to payee:**  
MSISDN - Mobile number  
NATID - Citizen ID, Tax ID, Government Customer ID  
BILLERID - Biller ID for Promptpay Bill Pay method  
EWALLETID - E-Wallet ID** |
|  | payerAccountNumber | String | Payer's Account Number |
|  | payerName | String | Name of the Payer (Sender Name) |
|  | sendingBankCode | String | 3-digits bank code of payer (SCB’s code is 014. Refer to appendix for complete bank code list) |
|  | receivingBankCode | String | 3-digits bank code of payer (SCB’s code is 014. Refer to appendix for complete bank code list) |
|  | amount | String | Transaction Amount |
|  | transactionId | String | SCB Transaction ID |
|  | fastEasySlipNumber | String | Slip number that appears on EASY application or Payment Reference from sender, up to 25 characters |
|  | transactionDateandTime | String | Date and time stamp (same as stamp on front-end application)  
**Format: yyyy-MM-ddThh:mm:ss.sss±hh:mm  
2017-03-13T09:00:00.000+07:00** |
|  | billPaymentRef1 | String | Reference code from acquirer |
|  | billPaymentRef2 | String | Reference code from acquirer |
|  | billPaymentRef3 | String | Reference code from acquirer |
|  | currencyCode | String | Code to define currency for transaction based on ISO 4217. Thai Baht is ‘764’ |
|  | equivalentAmount | String | Amount of money to be moved between the debtor and creditor, expressed in the currency of the debtor's account |
|  | equivalentCurrencyCode | String | Equivalent currency Code as per registered ISO 4217 |
|  | exchangeRate | String | Contains details of the exchange rate, used to convert from one currency to another |
|  | channelCode | String | Transaction channel name |
|  | partnerTransactionId | String | Transaction ID from a partner for My Prompt QR (B Scan C) |
|  | tepaCode | String | Reserve for future use |

## Example Response

```json
{
    "status": {
        "code": 1000,
        "description": "Success"
    },
    "data": [
        {
            "eventCode": "00300100",
            "transactionType": "Domestic Transfers",
            "reverseFlag": "",
            "payeeProxyId": "525887849220099",
            "payeeProxyType": "BILLERID",
            "payeeAccountNumber": "5013178143",
            "payeeName": "Somsak Sookjai",
            "payerProxyId": "6285203711",
            "payerProxyType": "ACCOUNT",
            "payerAccountNumber": "6285203711",
            "payerName": "Chatchai Choowong",
            "sendingBankCode": "014",
            "receivingBankCode": "014",
            "amount": "1000.00",
            "transactionId": "123e4567-e89b-12d3-a456-426655440000",
            "fastEasySlipNumber": "",
            "transactionDateandTime": "2018-10-27T09:00:00.000+07:00",
            "billPaymentRef1": "C12001",
            "billPaymentRef2": "B1100003",
            "billPaymentRef3": "AB2001C1171100013",
            "currencyCode": "",
            "equivalentAmount": "",
            "equivalentCurrencyCode": "",
            "exchangeRate": "",
            "channelCode": "PMH",
            "partnerTransactionId": "",
            "tepaCode": ""
        }
    ]
}
```

## Response Codes

See list of [Generic Response Codes](../references/generic-response-codes.html).
