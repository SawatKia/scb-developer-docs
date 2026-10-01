---
source_url: "https://developer.scb/#/documents/documentation/direct-debit-payment/direct-debit-registration-and-api-pay.html"
source_route: "#/documents/documentation/direct-debit-payment/direct-debit-registration-and-api-pay.html"
source: SCB Developer Portal
content_hash: 01a2c328004955e721214a1e7a2e8df0ccb0ef17fc19253920bf5d17c9b293bb
---

# Direct Debit registration and API pay

## Introduction

SCB provide new Payment Gateway direct debit to e-commerce partners. To have ability to receive direct debit payment real-time from registered SCB accounts via EASY app and ATM channels. Merchant can deduct SCB account real-time on merchant’s application and web-view. This feature enables e-commerce partners to design their own customer experiences by leveraging SCB’s direct debit services in order to provide customized journey to their customers. services offer three main functions to facilitate a direct debit payment which are OAuth token for authentication, payment request, and payment result inquiry.

**Note:** Sandbox version provided only SCB EASY app channel. For Live version please contact [gts\_collection@scb.co.th](mailto:gts_collection@scb.co.th).

## APIs

**There are 4 APIs as listed below:**

### 1\. Customer Registration Initiation

This feature provides a customer with two authentication options to complete direct debit registration via 2 channels below.

-   SCB EASY app
    
    Online Customer Registration with SCB EASY App – This option allows customer to authenticate identity by SCB EASY App PIN.
    

-   ATM
    
    Online Customer Registration with SCB ATM / Debit Card – This option allows customer to authenticate identity using personal and SCB ATM / Debit Card information.
    

The Online Customer Registration services offer three main functions to facilitate a direct debit registration which are OAuth token for authentication, web registration request, and check registration result inquiry.

**User journey**

-   Online Customer Registration with SCB EASY App

![](with-scb-easy-app.png)

-   Online Customer Registration with SCB ATM / Debit Card

![](with-scb-atm-debit-card.png)

### 2\. Customer Registration Inquiry

This feature provides a merchant partners able to check customer’s registration status from SCB Payment Gateway Direct Debit via APIs.

## Prerequisites

-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – [Client Credentials](../../documentation/basics/authentication.html#client-credentials-grant-type)
-   Data Encryption – Required

### Technical Flow

![](flow-registration-inquiry-sequence.png)

### Reference API

| Seq No. | API Name | API Endpoint |
| --- | --- | --- |
| 2,10 | Request Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 4 | Request Web Registration | [POST /v1/registration/web/init](../../api-reference-index/direct-debit-payment/post-registration-init.html) |
| 9 | Host to Host Registration Status | [Host to Host Registration Status (POST)](../../api-reference-index/direct-debit-payment/host-to-host-registration-status.html) |
| 12 | Request Registration Result | [POST /v1/registration/inquiry](../../api-reference-index/direct-debit-payment/post-registration-inquiry.html) |

### 3\. Direct Debit Payment

This feature provides merchant to generate charge direct to payer’s account via API Pay feature enables e-commerce partners to design their own customer experiences in order to provide customized journey to their customers.

### 4\. Direct Debit Payment Inquiry

This feature provides merchant partners able to check status of payment transaction from SCB Payment Gateway Direct Debit.

**User journey** ![](journey-payment-inquiry.png)

## Prerequisites

-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – [Client Credentials](../../documentation/basics/authentication.html#client-credentials-grant-type)
-   Data Encryption – Required

### Technical Flow

![](flow-payment-inquiry-sequence.png)

### Reference API

| Seq No. | API Sequence and Name | API Endpoint |
| --- | --- | --- |
| 2,8 | Request Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 4 | Request API Payment | [POST /v1/payment/direct/ddpay](../../api-reference-index/direct-debit-payment/post-api-pay.html) |
| 10 | Inquire Payment Status | [POST /v1/payment/inquiry](../../api-reference-index/direct-debit-payment/post-payment-inquiry.html) |
