---
source_url: "https://developer.scb/#/documents/documentation/direct-debit-payment/direct-debit-redirect-pay.html"
source_route: "#/documents/documentation/direct-debit-payment/direct-debit-redirect-pay.html"
source: SCB Developer Portal
content_hash: a961bdcce748a7463b9e052ad6c5035252a9fe7a5e07ad5e51c86bbd6c443416
---

# Direct Debit Redirect Pay

## Introduction

SCB provide new Payment Gateway direct debit to e-commerce partners. To have ability to receive direct debit payment real-time. Payer can authenticate by themselves with SCB services. For example, SCB EASY App, SCB EASY Net, SCB E-Payment, SCB Business Net, or SCB Business Anywhere, to make a payment to registered SCB accounts of e-commerce partners via web-view. The SCB Redirect Pay services offer three main functions to facilitate a direct debit payment which are OAuth token for authentication, payment request, and payment result inquiry.

**Note:** Sandbox version provided only SCB EASY app channel. For Live version please contact [gts\_collection@scb.co.th](mailto:gts_collection@scb.co.th).

## APIs

**There are 2 APIs as listed below:**

### 1\. Direct Debit Payment with Redirect Pay

This feature provides merchant e-commerce partners with ability to receive payment through SCB Payment Gateway Redirect Pay. Not only e-commerce partners do not need to have their own websites or native applications but also payers do have various authentication methods of SCB services to make a payment up to payer’s preferences.

**User journey** ![](journey-payment-redirect-pay.png)

### 2\. Direct Debit Payment Inquiry

This feature provides merchant partners able to check status of payment transaction from SCB Payment Gateway Direct Debit.

## Prerequisites

-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – [Client Credentials](../../documentation/basics/authentication.html#client-credentials-grant-type)
-   Data Encryption – Required

### Technical Flow

![](flow-payment-redirect-pay.png)

### Reference APIs

| Seq No. | API Name | API Endpoint |
| --- | --- | --- |
| 2,8 | Request Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 4 | Initial Web Pay | [POST /v1/payment/web/ddpay](../../api-reference-index/direct-debit-payment/post-redirect-pay.html) |
| 9 | Host to Host Web Payment Status | [Host to Host Web Payment Status (POST)](../../api-reference-index/direct-debit-payment/host-to-host-web-payment-status.html) |
