---
source_url: "https://developer.scb/#/documents/documentation/qr-payment/alipay-wechat.html"
source_route: "#/documents/documentation/qr-payment/alipay-wechat.html"
source: SCB Developer Portal
content_hash: 06a178f46174716b028f7f1f3e172a966efee7386f6a68e48789373638199640
---

# Alipay+ or WeChatPay

## Introduction

In the past year, more than 10 million Chinese tourists have traveled to Thailand. These tourists spent approximately 600 million THB during their stay in the country. Moreover, almost all Chinese nowadays use Alipay+ or WeChatPay as a means to pay and buy things. In order to help our merchants tap into this market effectively, SCB provides open APIs to enable Alipay+ and WeChatPay services.

### Reference Terms

**C** - Consumer  
**B** - Business

## APIs

### 1\. C Scan B Payment

**API Initiator** : Partner/Third Party  
**API Recipient** : SCB

The API for C Scan B payment supports both Alipay+ and WeChatPay. The C scan B payment first requires QR Code generation. After the QR is generated, it will be valid for a period of 2 hours. Afterwhich, the QR expires and needs to be regenerated in order to be usable again.

### 2\. B Scan C Payment

**API Initiator** : Partner  
**API Recipient** : SCB

The API for B Scan C payment supports both Alipay+ and WeChatPay. This API generates tokenized data, encapsulated in the QR Code, that the consumer presents inside the Alipay+ or WeChatPay application. To use this API, Partners and/or Third Parties require any QR code reader (e.g. 2D scanners, mobile applications) to read the token. The token within consumer's QR code is only valid for 2 minutes before expiring.

The API will have 3 possible outcomes:

-   Payment Success : Partner/Third Party will receive a status of "SUCCESS" from the API.
-   Require Consumer Confirmation : Partner/Third Party will receive a status of "UNKNOWN", "WAIT\_BUYER\_PAY" or "USERPAYING" from the API. In this case, the Partner/Third Party will have to make an API call to "Inquiry Transaction Status" repeatedly until they receive a status of "SUCCESS" or "NOT PAID".
-   Payment Failed : Partner/Third Party will receive a status not mentioned in the above mentioned.

### 3 . Payment Confirmation

**API Initiator** : SCB  
**API Recipient** : Partner/Third Party

**Note : The payment confirmation applies only to C Scan B Payment.**

Once the consumer completes the payment, SCB will send a payment confirmation to the registered partner's/third party's backend system. The payment confirmation is to acknowledge that the payment has been completed by the consumer on the banking platform and sends transactional information to the partner/third party. If the payment fails, no confirmation message will be sent.

### 4\. Inquiry Transaction Status

**API Initiator** : Partner/Third Party  
**API Recipient** : SCB

An API call can be made by the Partner/Third Party if they want to inquire on the transaction status of a pending payment. For example:

-   C Scan B Payment : The consumer has successfully paid but the partner/third party did not receive any payment confirmation from SCB.
-   B Scan C Payment : The partner/third party receives a status of "UNKNOWN", "WAIT\_BUYER\_PAY" or "USERPAYING" from the B Scan C Payment API response.

### 5\. Close QR

**API Initiator** : Partner/Third Party  
**API Recipient** : SCB

_For WeChatPay C Scan B Only_  
This is the case where QR code was already generated but the partner would like to invalidate the QR. It is hence recommended that the partner sends the Close QR API to invalidate the QR.

### 6\. Cancel Paid Transaction

**API Initiator** : Partner/Third Party  
**API Recipient** : SCB

Once a transaction has been paid by the customer, the partner can call the Cancel API to cancel the transaction. The Cancel API will cancel the transaction. There are 2 APIs depend on the use case as following

For C Scan B

-   Alipay+ - [POST /v1/payment/ewallets/cancel](../../api-reference-index/qr-payments/post-ewallets-cancel.html)
-   WeChatPay - [POST /v1/payment/ewallets/refund](../../api-reference-index/qr-payments/post-ewallets-refund.html)

For B Scan C

-   Alipay+ - [POST /v1/payment/ewallets/cancel](../../api-reference-index/qr-payments/post-ewallets-cancel.html)
-   WeChatPay - [POST /v1/payment/ewallets/cancel](../../api-reference-index/qr-payments/post-ewallets-cancel.html)

## Prerequisites

-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – [Client Credentials](../../documentation/basics/authentication.html#client-credentials-grant-type)

## Technical Flow

### C Scan B Payment

![](c-scan-b.png)

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 2 | C Scan B Payment | [POST /v1/payment/ewallets/qrcode/create](../../api-reference-index/qr-payments/post-ewallets-qrcode-create.html) |
| 3 | Payment Confirmation | \- |
| 4 | Inquiry Transaction Status | [POST /v1/payment/ewallets/inquire](../../api-reference-index/qr-payments/post-ewallets-inquire.html) |
| 5 | Cancel Paid Transaction (Alipay+) | [POST /v1/payment/ewallets/cancel](../../api-reference-index/qr-payments/post-ewallets-cancel.html) |
| 5 | Cancel Paid Transaction (WeChatPay) | [POST /v1/payment/ewallets/refund](../../api-reference-index/qr-payments/post-ewallets-refund.html) |
| 6 | Close QR (Only WeChatPay) | [POST /v1/payment/ewallets/qrcode/cancel](../../api-reference-index/qr-payments/post-ewallets-qrcode-cancel.html) |

### B Scan C Payment

![](b-scan-c.png)

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 2 | B Scan C Payment | [POST /v1/payment/ewallets/pay](../../api-reference-index/qr-payments/post-ewallets-pay.html) |
| 3 | Inquiry Transaction Status | [POST /v1/payment/ewallets/inquire](../../api-reference-index/qr-payments/post-ewallets-inquire.html) |
| 4 | Cancel Paid Transaction (Alipay+ & WeChatPay) | [POST /v1/payment/ewallets/cancel](../../api-reference-index/qr-payments/post-ewallets-cancel.html) |
