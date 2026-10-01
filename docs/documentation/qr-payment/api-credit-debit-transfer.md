---
source_url: "https://developer.scb/#/documents/documentation/qr-payment/api-credit-debit-transfer.html"
source_route: "#/documents/documentation/qr-payment/api-credit-debit-transfer.html"
source: SCB Developer Portal
content_hash: 2c35b96663e1e4f0a2572773a7688f9f20302fce904ac9df69198768b96f5a62
---

# API Credit /​ Debit Transfer

## Introduction

Our real-time API credit / debit transfer offers the following services:

1.  Direct Credit: Transfer to SCB account (THB or FCD account)
2.  Transfer to Other Bank: Cross-bank transfer to THB account
3.  Direct Debit: Automated payment from THB or FCD account
4.  PromptPay: Transfer to PromptPay account using TaxID or Citizen ID

Customers can initiate and send API requests to the bank for real-time credit / debit transfer every day 24 hours.

## APIs

**There are 5 APIs as listed below:**

**1\. Initiate API request**

This endpoint is for verifying credit or debit transfer transactions (full/partial amount) in THB or FCD account.

**API related**

-   POST/v1/payment/transfer/fcd/credit/initiate
-   POST/v1/payment/transfer/fcd/debit/initiate

**User journey**

![](journey-initiate.png)

**2\. Confirm API request**

This endpoint is for confirming credit or debit transfer transactions (full/partial amount) in THB or FCD account.

**API related**

-   POST/v1/payment/transfer/fcd/credit/confirm
-   POST/v1/payment/transfer/fcd/debit/confirm

**User journey**

![](journey-confirm.png)

**3\. Inquiry API request**

This endpoint is for inquiry of transfer status in THB or FCD account.

**API related**

-   POST/v1/payment/transfer/fcd/inquiry

**User journey**

![](journey-inquiry.png)

## Prerequisites

-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – [Client Credentials](../../documentation/basics/authentication.html#client-credentials-grant-type)
-   SSL Certificate – Required

## Technical Flow

### Direct Credit

Direct transfer from any THB account to SCB THB account, from any FCD account to SCB FCD account of the same currency.

![](flow-direct-credit.png)

### Reference API

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 3 | Initiate Credit Transfer Transactions | [POST /v1/payment/transfer/fcd/credit/initiate](../../api-reference-index/credit-transfer/post-credit-initiate.html) |
| 7 | Confirm Credit Transfer Transactions | [POST /v1/payment/transfer/fcd/credit/confirm](../../api-reference-index/credit-transfer/post-credit-confirm.html) |

### Transfer to Other Bank

Cross-bank transfer for up to 2,000,000 baht (THB to THB account)

![](flow-prompt-pay-other-bank.png)

### Reference API

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 3 | Initiate Credit Transfer Transactions | [POST /v1/payment/transfer/fcd/credit/initiate](../../api-reference-index/credit-transfer/post-credit-initiate.html) |
| 7 | Confirm Credit Transfer Transactions | [POST /v1/payment/transfer/fcd/credit/confirm](../../api-reference-index/credit-transfer/post-credit-confirm.html) |

### PromptPay (TaxID / Citizen ID)

Transfer to PromptPay account for up to 2,000,000 baht (THB to THB account)

![](flow-prompt-pay.png)

### Reference API

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 3 | Initiate Credit Transfer Transactions | [POST /v1/payment/transfer/fcd/credit/initiate](../../api-reference-index/credit-transfer/post-credit-initiate.html) |
| 7 | Confirm Credit Transfer Transactions | [POST /v1/payment/transfer/fcd/credit/confirm](../../api-reference-index/credit-transfer/post-credit-confirm.html) |

### Direct Debit

Automated payment from customer’s bank account to business’ bank account (FCD to FCD account and THB to THB account)

![](flow-direct-debit.png)

### Reference API

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 3 | Initiate Debit Transfer Transactions | [POST /v1/payment/transfer/fcd/debit/initiate](../../api-reference-index/credit-transfer/post-debit-initiate.html) |
| 7 | Confirm Debit Transfer Transactions | [POST /v1/payment/transfer/fcd/debit/confirm](../../api-reference-index/credit-transfer/post-debit-confirm.html) |

### Transfer transactions inquiry

This endpoint is for inquiry of transfer status in THB or FCD account.

![](flow-transfer-inquiry.png)

### Reference API

| Seq No. | API Name | API Endpoints |
| --- | --- | --- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 3 | Transfer Transactions inquiry | [POST /v1/payment/transfer/fcd/inquiry](../../api-reference-index/credit-transfer/post-inquiry.html) |

[Apply for service](/#/leadform?apiService=70d4f2f7-9e88-4d6c-8edd-e0bfd7643707)
