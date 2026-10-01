---
source_url: "https://developer.scb/#/documents/api-reference-index/references/glossary.html"
source_route: "#/documents/api-reference-index/references/glossary.html"
source: SCB Developer Portal
content_hash: 9d2d235c519ef4e4a44b4933b8845f45187bc031500dd23829606aa85f12904a
---

# Glossary

# A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

## A

Access token

Access token is used to access our system in the user's authority.  
See more detail in [Authentication API](../../documentation/basics/authentication.html).

API

An Application Program Interfaces (API) is a software intermediary that makes it possible for application programs to interact with each other and share data.  
To view all SCB APIs, refer to this [link](/#/home).

API Key

API authorization key respective to each partner obtained from partner onboarding process.  
See more detail in [Authentication API](../../documentation/basics/authentication.html).

API Secret

API authorization secret obtained from partner onboarding process.  
See more detail in [Authentication API](../../documentation/basics/authentication.html).

## B

B Scan C

The merchant scanning the customer’s QR Code and deducting the payment amount from their savings account.  
See more detail in [QR Code Payment](../../documentation/qr-payment/thai-qr.html).

Biller ID

A biller identification is a unique number assigned to a biller account to identify it throughout the course of bill payment activities. Identification of your profiles is assigned when you have come through the onboarding process to support the payment activities API.  
The onboarding process is automatic for sandbox applications.

BP

Bill Payment for SCB EASY App Payment  
See more detail in [SCB EASY App Payment](../../documentation/pay-with-scb/payment-via-scb.html).

## C

C Scan B

The customer scanning the merchant’s QR code and proceeding to pay based on chosen method.

Callback URL

There are 2 applications for the callback URL  
**1\. Authentication API** - A redirection URL to obtain the access token with OAuth, refer to this [link](../authentication/get-oauth-authorize.v2.html).  
**2\. SCB EASY App Payment API** - Callback URL is an optional parameter that can be appended to the deeplink obtained from this API, refer to this [link](../../documentation/pay-with-scb/payment-via-scb.html).

CC

Credit Card Payment for SCB EASY App Payment  
See more detail in [SCB EASY App Payment](../../documentation/pay-with-scb/payment-via-scb.html).

## E

E-Wallet payment

SCB API currently supports Alipay and WeChatPay.

## M

Merchant ID

A merchant identification is a unique number assigned to a merchant account to identify it throughout the course of credit card scheme payment activities. Identification of your profiles is assigned when you have come through the onboarding process to support the payment activities API. The onboarding process is automatic for sandbox applications.

## O

OAuth

OAuth is an open-standard authorization protocol or framework that provides applications the ability for secure authorised access to resources.

## P

PAN

Primary account number (PAN) or card number is card identifier such as credit and debit cards, as well as gift cards or other similar.

Payment confirmation endpoint

The endpoint which will be notified when QR payment is completed.

## Q

QR Card Scheme (QRCS)

This supports the use of credit cards as a source of funds for payment. Currently, QR CS is supported by VISA and Mastercard.  
See more detail in [QR Code Payment](../../documentation/qr-payment/thai-qr.html).

## R

Ref1

The biller reference value that merchant defined into the current transaction or agreed value with issuer bank. Required for the payment method below :

-   transactionType: PURCHASE
-   transactionSubType: BP

Ref2

A merchant defined biller reference value transaction or agreed value with issuer bank per transaction. Required if Supporting Reference field under Merchant Profile of application is set to Two references.

Ref3

A merchant defined biller reference value transaction or agreed value with issuer bank per transaction. This will be shown on EASY Application when merchant sends the terminal prefix and the reference 3 value.

Resource owner ID

The hash value of the userid, or related user identification value. If no resourceOwnerId available, use applicationId.

## S

Sandbox

A sandbox is a testing environment that isolates untested code changes and outright experimentation from the production environment.

SCB EASY App Payment

This is a payment type that requires SCB EASY App to complete the payment.

## T

Terminal ID

The terminal identification is a unique number asssigned to a merchant that related which devices from merchant. Required if proceed the credit card (full amount and installment plan) payment.

Terminal Prefix

A field including in Ref3 that starts with a terminal prefix (3),It's a map with confirmation endpoint in a biller account that will be notified from SCB, then leftover is free values that users can fill.

Thai QR Code Tag 30 (QR30)

This supports the use of a customer's savings account as source of funds for payment. This type of QR payment is supported by most of the major Thai banks. See more detail in [QR Code Payment](../../documentation/qr-payment/thai-qr.html).
