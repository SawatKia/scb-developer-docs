---
source_url: "https://developer.scb/#/documents/documentation/qr-payment/thai-qr.html"
source_route: "#/documents/documentation/qr-payment/thai-qr.html"
source: SCB Developer Portal
content_hash: 250a962d0caea46a56e1b0849c853cd39eebd236fc56276870637c3619c3d30f
---

# QR Code Payment

## Introduction

Cashless payment has become a crucial part of Thailand's financial infrastructure over the past few years. In response, Bank of Thailand and commercial banks are joining forces to push the agenda forward, with QR payment as one of their primary medium. SCB’s open API platform enables the public to capitalize on the cashless payment trend by providing payment interfaces for partners and startups alike to develop on top of.

Currently, QR Payment in Thailand are classified into the following categories:

**1\. Thai QR Code Tag 30 (QR 30)** - This is to support merchant-presented mode (C scan B) QR codes, where the customer scans the merchant’s QR code and pays using either the current or savings account as the source of funds. This type of QR payment is supported by most of the major Thai banks.

**2\. QR Card Scheme (QR CS)** - This is to support merchant-presented mode (C scan B) QR codes, where the customer scans the merchant’s QR code and pays using credit cards as the source of funds. Currently, QR CS is supported by VISA and Mastercard, making it compatible internationally.

**3\. MyPrompt QR** - This is to support consumer-presented mode (B Scan C) QR codes, where the merchant scans the customer’s QR Code and deducts the payment amount from their current or savings account. Major Thai banks will start launching the support of MyPrompt QR in the near future.

## Reference Terms

**C** - Consumer  
**B** - Business

## APIs

### C Scan B Payment

#### 1\. QR Code Generation

**API Initiator** : Partner/Third Party  
**API Recipient** : SCB

The API for QR code generation supports both QR 30 and QR CS (Card Scheme). In addition, a single QR Code can contain both at the same time. Partners can choose to generate

-   QR 30 Only
-   QR CS Only
-   QR 30 and QR CS

Do note that the ability to support and display the payment options is respective to each mobile banking application.

For example

-   QR is generated to support QR 30 and QR CS payment
-   Mobile Banking Application A supports QR 30 only
-   Mobile Banking Application B supports both QR 30 and QR CS

Scan Result

-   When the customer using mobile banking application A scans the QR, the customer will be only presented with the option to pay with the savings or current account.
-   When the customer using mobile banking application B scan the QR, the customer will be presented with the options to pay with the savings or current account and available credit cards.
-   If an amount is not specified in the QR code, the maximum amount for a transaction is determined by the daily transaction limit of the account.

#### 2\. Payment Confirmation

**API Initiator** : SCB  
**API Recipient** : Partner/Third Party

Once the customer completes payment, SCB will send a payment confirmation to the registered partner's/third party's backend system. This confirmation acknowledges and sends transactional information to the partner/third party.

Payment confirmation is supported for any payment that is initiated from a mobile banking application supporting QR 30 and/or QR CS payment.

#### 3\. Slip Verification

**API Initiator** : Partner/Third Party  
**API Recipient** : SCB

If the customer scans the QR and pays successfully but the partner does not receive the payment confirmation, the partner can use the slip verification API to verify the transaction of the customer. The API requires the transaction ID shown in the QR Code of the customer's receipt.

**Extracting data on mini QR**  
The transaction ID can be extracted from the mini QR by following the specs [here](./extracting-data-from-mini-qr.pdf)

#### 4\. Payment Transaction Inquiry

**API Initiator** : Partner/Third Party  
**API Recipient** : SCB

The API can be used by partners to inquire the transaction status and perform verification on the transaction. An example to trigger such this API call is when a payment confirmation was not received by the partner.

## Prerequisites

-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – [Client Credentials](../../documentation/basics/authentication.html#client-credentials-grant-type)

### B Scan C Payment

#### 1\. B Scan C Payment

**API Initiator** : Partner/Third Party  
**API Recipient** : SCB

After the customer initiates the transaction by generate MyPrompt QR on their mobile application, the merchant scans and obtains payment information encapsulated within the QR code. After which, the merchant will send transaction details to this API for the bank to facilitate the payment deduction from the customer’s savings or current account.

#### 2\. B Scan C Refund

**API Initiator** : Partner/Third Party  
**API Recipient** : SCB

A refund request can be sent to the bank by the merchant through this API. The full-amount refund can only be executed successfully before 23:00 hours of the same day of the transaction.

#### 3\. B Scan C Payment Transaction Inquiry

**API Initiator** : Partner/Third Party  
**API Recipient** : SCB

My Prompt QR (B Scan C) Transaction Inquiry API is used when partner gets timeout response from SCB. For example, partner sends payment and timeout, or partner sends refund then timeout. So, they can inquire to verify the result of those timeout calls.

## Prerequisites

-   CSR – Required (Issued by SCB for production APIs)
-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – [Client Credentials](../../documentation/basics/authentication.html#client-credentials-grant-type)

## Technical Flow

### C Scan B Payment: Thai QR Code Tag 30 (QR 30)

![](qr-payment.png)

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 2 | QR Code Generation | [POST /v1/payment/qrcode/create](../../api-reference-index/qr-payments/post-qrcode-create.html) |
|  | or | [POST /v2/payment/qrcode/create](../../api-reference-index/qr-payments/post-qrcode-create-v2.html) (qr image URL) |
| 3 | Payment Confirmation | \- |
| 4 | Slip Verification | [GET /v1/payment/billpayment/transactions/{transRef}?{param}={value}](../../api-reference-index/qr-payments/get-billpayment-transactions.html) |
| 5 | Payment Transaction Inquiry | [POST /v3/payment/billpayment/inquiry](../../api-reference-index/qr-payments/post-billpayment-inquiry.html) |
|  | or | [GET /v1/payment/billpayment/inquiry?{param}={value}](../../api-reference-index/qr-payments/get-billpayment-inquiry.html) |
| 6 | QR Code Void | [POST /v1/payment/qrcode/void](../../api-reference-index/qr-payments/post-qrcode-void.html) |

### C Scan B Payment: QR Card Scheme (QR CS)

![](qrcs-flow.png)

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 2 | QR Code Generation | [POST /v1/payment/qrcode/create](../../api-reference-index/qr-payments/post-qrcode-create.html) |
| 3 | Payment Confirmation | \- |
| 4 | Payment Transaction Inquiry | [GET /v1/payment/qrcode/creditcard/{qrId}](../../api-reference-index/qr-payments/get-qrcs-inquiry.html) |

### B Scan C Payment

![](b-scan-c-sequence.png)

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 2 | QR Code Generation | [POST /v1/payment/merchant/rtp/confirm](../../api-reference-index/qr-payments/post-bscanc-confirm-payment.html) |

### B Scan C Refund

![](b-scan-c-refund-sequence.png)

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 2 | B Scan C Refund | [POST /v1/payment/merchant/rtp/refund](../../api-reference-index/qr-payments/post-bscanc-refund-payment.html) |

### B Scan C Inquiry

![](b-scan-c-inquiry-sequence.png)

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 2 | B Scan C Payment Transaction Inquiry | [GET /v1/payment/billpayment/inquiry?{param}={value}](../../api-reference-index/qr-payments/get-billpayment-inquiry.html) |
