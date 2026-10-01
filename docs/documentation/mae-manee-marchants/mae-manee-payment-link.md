---
source_url: "https://developer.scb/#/documents/documentation/mae-manee-marchants/mae-manee-payment-link.html"
source_route: "#/documents/documentation/mae-manee-marchants/mae-manee-payment-link.html"
source: SCB Developer Portal
content_hash: 331ed77eaa11e540f668933fb342d27f2b164c17baccfe085f2fa29114e90dec
---

# Mae Manee Payment​ Link

## Introduction

Payment Link enables your merchants to create their own link for their order and send it to their customers via social networking channels. Customers can select payment options and pay for the merchant using their mobile banking app.

Currently, Payment Link offers the following payments:

**1\. SCB Paywise -** This is to support payment via the SCB EASY App, which allows customers to pay with their current account, savings account, credit card in full amount, installment plan by credit card, or Speedy Cash card. This type of payment is supported for existing SCB customer.

**2\. Thai QR Code Tag 30 (QR 30) -** This is to support merchant-presented mode (C scan B) QR codes, in which the customer scans the merchant's QR code and pays with either a current or a savings account. Most major Thai banks accept this type of QR payment.

**Note:**  
\- This API requires Sharing Mae Manee Merchant Profile​  
\- This API could be related to a partner's order details.  
\- To allow the characters, some fields, such as Cancel Policy, must be validated.  
\- Merchants must register for this payment service on the Mae Manee App if they accept credit cards with a full amount and an installment plan.  
\- Each QR has a transaction limit. [See more details](https://www.scb.co.th/th/personal-banking/payment/for-merchant/mae-manee-app.html)​  
\- For the payment link feature, there will be a QR CS and a Payment Gateway in the future.  

**User Journey**

![](./mae-manee-payment-link/mae-manee-payment-link-journey.png)

**Inquiry Transaction Detail​**

After the customer pays successfully, if a merchant would like to check the transaction status, they can use the inquiry function by using Wallet ID, Partner Reference No, Order ID, Channel and Request ID .

**Inquiry Transaction History​**

After the customer pays successfully, If a merchant would like to check many transaction status, they can use the inquiry function by using Wallet ID, Channel , Start Date , End Date , Request ID , Page and Pagesize

**Note:**  
\- The ability to support the order status (bulk) must be within 3 months from the current date.​  
\- The ability to support the order status (bulk) must not exceed 30 days per inquiry.​  
\- The ability to support the order status (bulk) is pagination, 50 records per page.  
  

# Payment Confirmation

After the customer pays successfully, Mae Manee App will send a payment confirmation to Merchant's registered URL. All onboarded merchants may provide a payment confirmation endpoint.​

**Note:**  
\- If the customer's payment is unsuccessful, no payment confirmation will be sent.</label

## Endpoint

-   QR 30 : The endpoint is registered per ref 1, ref 2 as Wallet ID, ref 3 (Terminal ID).​
-   QR CS : The endpoint is registered per Merchant ID.​
-   SCB EASY App payment with bill payment type (BP) : The endpoint is registered per ref 1, ref 2 as Wallet ID, ref 3 (Terminal ID).​
-   SCB EASY App payment with credit card full amount type (CCFA) : The endpoint is registered per Merchant ID.​
-   SCB EASY App Payment with credit card installment payment plan type (CCIPP) : The endpoint is registered per Merchant ID.​
-   Alipay WeChatPay : The endpoint is registered per Merchant ID and Terminal ID.​>

## APIs

### 1\. Payment Link Generation

**API Initiator :** Partner/Third Party  
**API Recipient :** SCB

The API can be used by partners to generate the Payment Link. An example to trigger such this API call is when a merchant creates an order and would like to generate QR in order to send the QR to the end customer.

The API for QR code generation supports QR 30, QR CS, Alipay, and WeChatPay. Partners can choose to generate. An example to trigger such this API call is when a merchant creates an order and would like to generate QR in order to send the QR to the end customer.

### 2\. Payment Confirmation

**API Initiator :** SCB  
**API Recipient :** Partner/Third Party

Once the customer completes payment, SCB will send a payment confirmation to the registered partner's/third party's backend system. This confirmation acknowledges and sends transactional information to the partner/third party.

Payment confirmation is supported for any payment that is initiated from a mobile banking application supporting QR 30 and/or QR CS payment.

### 3\. Payment Transaction Inquiry (Per Transaction)

**API Initiator :** Partner/Third Party  
**API Recipient :** SCB

The API can be used by partners to inquire about the transaction status and perform verification on the transaction. An example of triggering such this API call is when a payment confirmation was not received by the partner.

### 4\. Payment Transaction Inquiry (Historic Max 30 days)

**API Initiator :** Partner/Third Party  
**API Recipient :** SCB

After the customer pays successfully, if a merchant would like to check the transaction status, they can use the inquiry function by using Wallet ID, Payment Date Time From and Payment Date Time To.  
  

**Note:**  

-   The ability to support the order status (bulk) must be within 3 months from the current date.
-   The ability to support the order status (bulk) must not exceed 30 days per inquiry.
-   The ability to support the order status (bulk) is pagination, 50 records per page.

## Prerequisites

-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – Client Credentials

## Technical Flow

![](./mae-manee-payment-link/mae-manee-payment-link-sequence-diagram.png)

| Seq No. | API Name | API Endpoints |
| :-: | :-- | :-- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 2 | Payment Link Generation | [POST /v1/maemanee/payment/paymentlink](../../api-reference-index/mae-manee-marchants/post-mae-manee-payment-link.html) |
| 3 | Payment Confirmation | \- |
| 4 | Payment Translation Inquiry | [POST /v1/maemanee/payment/transaction/getone](../../api-reference-index/mae-manee-marchants/get-mae-manee-transaction.html) |
