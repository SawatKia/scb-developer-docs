---
source_url: "https://developer.scb/#/documents/documentation/mae-manee-marchants/mae-manee-qr-payment.html"
source_route: "#/documents/documentation/mae-manee-marchants/mae-manee-qr-payment.html"
source: SCB Developer Portal
content_hash: 5668eeff5362879701f004c494b82224cdb45ea679a2723e706ec896d6af7ddb
---

# Mae Manee QR Code Payment​

## Introduction

Mae Manee QR Code Payment​ allows your merchants to create orders that accept a QR code that their customers may use to pay for them. Customers can make bill payments (QR Tag 30) and credit card payments (QR CS) using a mobile banking app and Alipay or WechatPay E-wallet, and merchants will be notified when the payment is completed.

Currently, Mae Manee QR Code Payment​ are classified into the following categories:

**1\. Thai QR Code Tag 30 (QR 30) -** This is to support merchant-presented mode (C scan B) QR codes, in which the customer scans the merchant's QR code and pays with either a current or a savings account. Most major Thai banks accept this type of QR payment.

**2\. QR Card Scheme (QR CS) -** This is to support merchant-presented mode (C scan B) QR codes, in which the customer scans the merchant's QR code and pays with a credit card. QR CS is currently supported by VISA, Mastercard, and UnionPay, making it globally compatible.

**3\. Alipay and ​WeChatPay -** This is to support merchant-presented mode (C scan B) Alipay or WeChatPay QR codes to tourist customer segments and expand their payment options so that the merchants can effectively tap into this market.

**Note:**  
\-​ This API requires Sharing Mae Manee Merchant Profile​  
\-​ This API could be related to a partner's order details.  
\-​ QR Card Scheme (QR CS) requires merchants to register this payment service on the Mae Manee App.  
\- Alipay/WeChatPay requires merchants to register this payment service on the Mae Manee App.  
\-​ Each QR has a transaction limit. [See more details](https://www.scb.co.th/th/personal-banking/payment/for-merchant/mae-manee-app.html)  

**User Journey**

![](./mae-manee-qr-payment/mae-manee-qr-payment-journey.png)

**Inquiry Transaction Detail​** After the customer pays successfully, if a merchant would like to check the transaction status, they can use the inquiry function by using Wallet ID, Partner Reference No, Order ID, Channel and Request ID .

**Inquiry Transaction History​** After the customer pays successfully, If a merchant would like to check many transaction status, they can use the inquiry function by using Wallet ID, Channel , Start Date , End Date , Request ID , Page and Pagesize

**Note:**  
\- The ability to support the order status (bulk) must be within 3 months from the current date.​  
\- The ability to support the order status (bulk) must not exceed 30 days per inquiry.​  
\- The ability to support the order status (bulk) is pagination, 50 records per page.  
  

# Payment Confirmation

After the customer pays successfully, Mae Manee App will send a payment confirmation to Merchant's registered URL. All onboarded merchants may provide a payment confirmation endpoint.​

**Note:**  
\- If the customer's payment is unsuccessful, no payment confirmation will be sent.

## Endpoint

-   QR 30 : The endpoint is registered per ref 1, ref 2 as Wallet ID, ref 3 (Terminal ID).​
-   QR CS : The endpoint is registered per Merchant ID.​
-   SCB EASY App payment with bill payment type (BP) : The endpoint is registered per ref 1, ref 2 as Wallet ID, ref 3 (Terminal ID).​
-   SCB EASY App payment with credit card full amount type (CCFA) : The endpoint is registered per Merchant ID.​
-   SCB EASY App Payment with credit card installment payment plan type (CCIPP) : The endpoint is registered per Merchant ID.​
-   Alipay WeChatPay : The endpoint is registered per Merchant ID and Terminal ID.​

## APIs

### 1\. QR Code Generation

**API Initiator :** Partner/Third Party  
**API Recipient :** SCB

The API for QR code generation supports QR 30, QRCS, ALIPAY, and WECHAT. Partners can choose to generate. An example of triggering such this API call is when a merchant creates an order and would like to generate QR in order to send the QR to the end customer.

### 2\. Payment Transaction Inquiry (Per Transaction)

**API Initiator :** Partner/Third Party  
**API Recipient :** SCB

The API can be used by partners to inquire about the transaction status and perform verification on the transaction. An example of triggering such this API call is when a payment confirmation was not received by the partner.

### 3\. Payment Transaction Inquiry (Historic Max 30 Days)

**API Initiator :** Partner/Third Party  
**API Recipient :** SCB

After the customer pays successfully, if a merchant would like to check the transaction status, they can use the inquiry function by using Wallet ID, Payment Date Time From and Payment Date Time To. ​

**Note**  

-   The ability to support the order status (bulk) must be within 3 months from the current date.
-   The ability to support the order status (bulk) must not exceed 30 days per inquiry.
-   The ability to support the order status (bulk) is pagination, 50 records per page.

## Prerequisites

-   API Authentication – Required
-   Type of Authentication – OAuth token
-   OAuth Grant Type – Client Credentials

## Technical Flow

![](./mae-manee-qr-payment/mae-manee-qr-payment-sequence-diagram.png)

| Seq No. | API Name | API Endpoints |
| :-: | :-- | :-- |
| 1 | Generate Access Token | [POST /v1/oauth/token](../../api-reference-index/authentication/post-oauth-token.html) |
| 2 | QR Code Generation | [POST /v1/maemanee/payment/qr/create](../../api-reference-index/mae-manee-marchants/post-mae-manee-qr-payment.html) |
| 3 | Payment Confirmation | \- |
| 4 | Payment Translation Inquiry | [POST /v1/maemanee/payment/transaction/getone](../../api-reference-index/mae-manee-marchants/get-mae-manee-transaction.html) |
